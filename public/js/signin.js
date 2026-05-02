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

  const createTask = document.querySelector("#openForm");
  const containCard = document.querySelector(".contain-card");

  createTask.addEventListener("click", () => {
    console.log("click");
    containCard.classList.toggle("display");
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
        <div class="animations">
              <input type="checkbox" name="" id="bone">
            </div>
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
  });
  core.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const card = e.target.closest(".card");
      card.remove();
    }
  });
  const details = document.querySelector(".details");
  details.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const card = e.target.closest(".card");
      card.remove();
    }
  });
  const circle = document.querySelector(".circle");
  const email = document.querySelector("#emails");
  const emailcollector = user.email.trim();
  const nameF = emailcollector.slice(0, 1);
  circle.innerHTML = nameF.toUpperCase();
  email.value = emailcollector;

  //..........task complete or not..............
  const loading = document.querySelector(".loading");
  core.addEventListener("click", (e) => {
    // detect checkbox click
    if (e.target.id === "bone") {
      const card = e.target.closest(".card"); // get clicked card
      const two = document.querySelector("#two_dase");

      if (e.target.checked) {
        loading.classList.add("tont");
        two.appendChild(card);
        // move to vital
      } else {
        core.appendChild(card); // move back
      }
    }
  });
  const two = document.querySelector("#two_dase");

  two.addEventListener("click", (event) => {
    if (event.target.id === "bone") {
      const card = event.target.closest(".card");
      const core = document.querySelector("#core");

      if (!event.target.checked) {
        core.appendChild(card);

        if (two.querySelectorAll(".card").length === 0) {
          loading.classList.remove("tont");
        }
      }
    }
  });
});
