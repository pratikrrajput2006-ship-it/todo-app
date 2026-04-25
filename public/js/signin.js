const tabs = document.querySelectorAll('[role="tab"]');
const tablist = document.querySelector('[role="tablist"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dacorate(tab);
    const tabpanels = document.querySelectorAll('[role="tabpanel"]');
    tabs.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      t.setAttribute("tabindex", "-1");
    });
    tabpanels.forEach((p) => {
      p.hidden = true;
    });
    tab.setAttribute("aria-selected", "true");
    const panelId = tab.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    panel.hidden = false;
    tab.focus();
  });
});

function dacorate(tab) {
  tabs.forEach((data) => {
    const collect = data == tab;
    if (collect) {
      data.classList.add("utility");
    } else {
      data.classList.remove("utility");
    }
  });
}
