import {
  scenarios,
  steps,
  getScenario,
  createBrief,
} from "./src/scenarios.mjs";

let currentIndustry = "beauty";
let currentStep = 0;
const industryButtons = [...document.querySelectorAll("[data-industry]")];
const stepButtons = [...document.querySelectorAll("[data-step]")];
const panel = document.querySelector("#demo-panel");
const text = (id, value) => {
  document.getElementById(id).textContent = value;
};

function renderDemo() {
  const scenario = getScenario(currentIndustry);
  const stage = scenario.stages[currentStep];
  text("demo-business", `${scenario.business}의 이번 주 목표`);
  text("demo-goal", scenario.goal);
  text("stage-title", stage.title);
  text("stage-body", stage.body);
  text("stage-result", stage.result);
  text("stage-message", stage.message);
  text("output-label", stage.label);
  text("output-customer", stage.customer);
  text("output-detail", stage.detail);
  for (const button of industryButtons)
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.industry === currentIndustry),
    );
  for (const [index, button] of stepButtons.entries()) {
    const active = index === currentStep;
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  }
  panel.setAttribute("aria-labelledby", `step-${currentStep}`);
  document.querySelector("#next-step").firstChild.textContent =
    currentStep === steps.length - 1
      ? "처음부터 다시 보기 "
      : "다음 업무 보기 ";
  text(
    "download-status",
    `${scenario.name} 업무 예시를 텍스트 파일로 저장할 수 있어요.`,
  );
}
for (const button of industryButtons)
  button.addEventListener("click", () => {
    if (!Object.hasOwn(scenarios, button.dataset.industry)) return;
    currentIndustry = button.dataset.industry;
    currentStep = 0;
    renderDemo();
  });
for (const [index, button] of stepButtons.entries()) {
  button.addEventListener("click", () => {
    currentStep = index;
    renderDemo();
  });
  button.addEventListener("keydown", (event) => {
    const destinations = {
      ArrowRight: (index + 1) % steps.length,
      ArrowLeft: (index + steps.length - 1) % steps.length,
      Home: 0,
      End: steps.length - 1,
    };
    if (!Object.hasOwn(destinations, event.key)) return;
    event.preventDefault();
    currentStep = destinations[event.key];
    renderDemo();
    stepButtons[currentStep].focus();
  });
}
document.querySelector("#next-step").addEventListener("click", () => {
  currentStep = (currentStep + 1) % steps.length;
  renderDemo();
  panel.focus({ preventScroll: true });
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu(restoreFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "메뉴 열기");
  navigation.classList.remove("is-open");
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  )
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
matchMedia("(min-width: 801px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

document.querySelector("#download-brief").addEventListener("click", () => {
  try {
    const blob = new Blob(["\ufeff", createBrief(currentIndustry)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `소희-${getScenario(currentIndustry).name.replace(/[·\s]/g, "-")}-업무예시.txt`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    text(
      "download-status",
      "업무 예시 파일의 다운로드를 요청했어요. 브라우저 다운로드 목록을 확인해 주세요.",
    );
  } catch {
    text(
      "download-status",
      "파일을 저장하지 못했어요. 위의 업종별 업무 예시에서 내용을 확인해 주세요.",
    );
  }
});
text("year", String(new Date().getFullYear()));
renderDemo();
