import { getData } from "./common.js";

document.addEventListener("DOMContentLoaded", () => {
  const user = getData();

  const tabs = document.querySelectorAll('[role="tab"]');

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
      if (data === tab) {
        data.classList.add("utility");
      } else {
        data.classList.remove("utility");
      }
    });
  }

  ////// vital task ////////

  const createTask = document.querySelector("#openForm");
  const containCard = document.querySelector(".contain-card");

  createTask.addEventListener("click", () => {
    console.log("click");
    containCard.classList.add("display");
  });

  const buttonC = document.querySelector("#cbtn");
  const input = document.querySelector("#input");
  const textarea = document.querySelector("#textarea");
  const core = document.querySelector("#core");

  let storeinput = "";
  let storetextarea = "";

  input.addEventListener("input", () => {
    storeinput = input.value;
  });

  textarea.addEventListener("input", () => {
    storetextarea = textarea.value;
  });

 buttonC.addEventListener("click", () => {
  if (input.value.trim() && textarea.value.trim()) {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="animations">
        <lottie-player
          src="/assets/json/checkbox.json"
          background="transparent"
          speed="1"
        ></lottie-player>
        <img src="/assets/svg/star.svg" class="star" height="28px" />
      </div>

      <div class="info">
        <div class="tiltle-div">
          <h4>Title:</h4>
          <span></span>
        </div>
        <p></p>
      </div>

      <div class="box">
        <img src="/assets/svg/delete.svg" class="delete-btn" />
      </div>
    `;

    // 🔥 SAFE TEXT INSERTION
    card.querySelector("span").textContent = input.value;
    card.querySelector("p").textContent = textarea.value;

    core.appendChild(card);

    // reset
    input.value = "";
    textarea.value = "";
    containCard.classList.remove("display");
  }


  ////// delete task //////

  core.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const card = e.target.closest(".card");
      card.remove();
    }
  });
});
core.addEventListener("click", (e) => {
  if (e.target.tagName === "LOTTIE-PLAYER") {
    const anim = e.target;

    if (!anim.dataset.checked) {
      anim.play();

      anim.addEventListener(
        "complete",
        () => {
          anim.pause();
          anim.seek("80%");
        },
        { once: true }
      );

      anim.dataset.checked = "true";
    } else {
      anim.pause();
      anim.seek("0%");
      anim.dataset.checked = "";
    }
  }
});

core.addEventListener("click", (e) => {
  if (e.target.classList.contains("star")) {
    e.target.classList.toggle("active");
  }
});
const circle=document.querySelector(".circle");
const email=document.querySelector("#emails");
const emailcollector=user.email.trim();
const nameF=emailcollector.slice(0,1);
circle.innerHTML=nameF.toUpperCase();
email.value=emailcollector;
});

