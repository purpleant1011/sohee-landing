// Ego Lite input must prepend globalThis.SOHEE_CHECK = {spaceId, root, origin}.
// The CLI does not forward shell environment variables or the project cwd.
const assert = (await import('node:assert/strict')).default;
const fs = await import('node:fs/promises');
const path = await import('node:path');
const task = await taskSpace(globalThis.SOHEE_CHECK.spaceId);
const page = task.page('p1');
const output = path.join(globalThis.SOHEE_CHECK.root, '.superloopy/evidence/frontend/v6');
await page.cdp('Page.addScriptToEvaluateOnNewDocument', {source: `window.__soheeErrors=[];window.addEventListener('error',e=>window.__soheeErrors.push(e.message));const originalError=console.error;console.error=(...args)=>{window.__soheeErrors.push(args.map(String).join(' '));originalError.apply(console,args);};`});
await page.goto((globalThis.SOHEE_CHECK.origin || 'http://127.0.0.1:4174') + '/landing/');
await page.cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
console.log(await page.snapshot());
// Scroll each lazy-loaded character into view before checking the image data.
for (const index of [0,1,2,3]) {
 await page.evaluate(i=>document.querySelectorAll('.sohee-character')[i].scrollIntoView({behavior:'instant'}),index);
 await page.waitForFunction(i=>{const x=document.querySelectorAll('.sohee-character')[i];return x.complete&&x.naturalWidth>0;},index);
}
const sizes=[];
for(const width of [1440,768,390,320]) {
 await page.cdp('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<600});
 await page.evaluate(()=>document.querySelector('.closing-section').scrollIntoView({behavior:'instant'}));
 await page.waitForFunction(()=>[...document.querySelectorAll('.sohee-character')].every(x=>x.complete&&x.naturalWidth>0));
 const state=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,characters:[...document.querySelectorAll('.sohee-character')].map(x=>{const s=getComputedStyle(x),r=x.getBoundingClientRect();return {fit:s.objectFit,clip:s.clipPath,mask:s.maskImage,radius:s.borderRadius,width:r.width,height:r.height,naturalWidth:x.naturalWidth,naturalHeight:x.naturalHeight,alt:x.alt};}),broken:[...document.querySelectorAll('main img')].filter(x=>x.complete&&!x.naturalWidth).map(x=>x.src)}));
 assert.ok(state.scrollWidth<=state.width, `horizontal overflow at ${width}`);
 assert.equal(state.broken.length,0);
 assert.equal(state.characters.length,4);
 for(const c of state.characters) {assert.equal(c.fit,'contain');assert.equal(c.clip,'none');assert.equal(c.mask,'none');assert.equal(c.radius,'0px');assert.ok(c.width>0&&c.height>0);assert.equal(c.naturalWidth,926);assert.equal(c.naturalHeight,1698);}
 sizes.push(state);
 if(width===1440||width===390){await page.screenshot({path:path.join(output,`${width}-closing.png`)});for(const id of ['top','work','demo']){await page.evaluate(id=>document.getElementById(id).scrollIntoView({behavior:'instant'}),id);await page.screenshot({path:path.join(output,`${width}-${id}.png`)});}}
}
await page.cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
await page.click('button[aria-label="메뉴 열기"]');
assert.ok(await page.evaluate(()=>!!document.querySelector('[role=dialog]')));
await page.keyboard.press('Escape');
assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('aria-label')),'메뉴 열기');
await page.click('.hero-copy a[href="#demo"]');
await page.waitForFunction(()=>location.hash==='#demo');
await page.click('[role=tab][id$="-trigger-flower"]');
await page.click('[role=tab][id$="-trigger-2"]');
assert.match(await page.evaluate(()=>document.querySelector('.demo-panel[data-state=active] h3').textContent),/주문과 픽업/);
await page.focus('[role=tab][id$="-trigger-flower"]');await page.keyboard.press('ArrowRight');
assert.match(await page.evaluate(()=>document.querySelector('[aria-label="가게 업종 선택"] [aria-selected=true]').textContent),/클래스/);
await page.click('loc=role:button[name="마케팅을 잘 몰라도 시작할 수 있나요?"]');
const downloadPromise=page.waitForEvent('download',{timeout:15000});await page.click('loc=role:button[name="선택한 업종 업무 예시 저장"]');const download=await downloadPromise;await download.saveAs(path.join(output,'downloaded-brief.txt'));
const errors=await page.evaluate(()=>window.__soheeErrors);assert.deepEqual(errors,[]);
const result={sizes,errors,menu:true,keyboard:true,cta:true,industry:true,download:download.suggestedFilename()};
await fs.writeFile(path.join(output,'browser-results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));
