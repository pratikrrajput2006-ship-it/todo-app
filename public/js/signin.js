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
    card_edit.classList.remove("edit_show");
    containCard.classList.toggle("display");
  });

  const buttonC = document.querySelector("#cbtn");
  const input = document.querySelector("#input");
  const textarea = document.querySelector("#textarea");
  const core = document.querySelector("#core");
  const notifi = document.querySelector(".notification");
  const para = document.querySelector("#para");
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
              <input type="checkbox" name="" id="bone">
            </div>

            <div class="info">
              <div class="tiltle-div">
                <h4>Title:</h4>
                <span></span>
              </div>
              <p></p>
            </div>
            <div class="edit all">
              <img src="/assets/svg/edit.svg" class="all" height="20px" alt="">
            </div>
            <div class="box">
              <img
                src="/assets/svg/delete.svg"
                alt=""
                srcset=""
                class="delete-btn"
                id="delete"
              />
            </div>
    `;

      //............. SAFE TEXT INSERTION..................
      card.querySelector("span").textContent = input.value;
      card.querySelector("p").textContent = textarea.value;

      core.appendChild(card);
      para.textContent = "Task Created Successfully.";
      notifi.classList.add("hover");
      setTimeout(() => {
        notifi.classList.remove("hover");
      }, 3000);
      input.value = "";
      textarea.value = "";
      containCard.classList.remove("display");
    }
  });
  // ...................edit task..................
  const edit = document.querySelector("#edit_task");
  const card_edit = document.querySelector(".contain-cards");
  let duplicate = "";
  core.addEventListener("click", (e) => {
    if (!e.target.classList.contains("all")) {
      return;
    }
    containCard.classList.remove("display");
    card_edit.classList.add("edit_show");

    const card = e.target.closest(".card");
    duplicate = card;
    let span = card.querySelector("span").textContent;
    let p = card.querySelector("p").textContent;
    const inputs = card_edit.querySelector("#inputs");
    const textarea = card_edit.querySelector("textarea");
    inputs.value = span;
    textarea.value = p;
  });

  const btnclick = document.querySelector("#cbtns");
  btnclick.addEventListener("click", () => {
    let span = duplicate.querySelector("span").textContent;
    let p = duplicate.querySelector("p").textContent;
    const inputs = card_edit.querySelector("#inputs");
    const textarea = card_edit.querySelector("textarea");
    const notifi = document.querySelector(".notification");
    const para = document.querySelector("#para");

    if (inputs.value == span && textarea.value == p) {
      para.textContent = "Not any change";
      notifi.classList.add("hover");
      setTimeout(() => {
        notifi.classList.remove("hover");
      }, 3000);
      card_edit.classList.remove("edit_show");
      return;
    }

    duplicate.querySelector("span").textContent = inputs.value;
    duplicate.querySelector("p").textContent = textarea.value;
    para.textContent = "Changes Successfully Updates.";
    notifi.classList.add("hover");
    setTimeout(() => {
      notifi.classList.remove("hover");
    }, 3000);
    inputs.value = " ";
    textarea.value = " ";
    card_edit.classList.remove("edit_show");
  });

  //...............delete task.............................
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
    if (e.target.id === "bone") {
      const card = e.target.closest(".card"); // get clicked card
      const two = document.querySelector("#two_dase");

      if (e.target.checked) {
        loading.classList.add("tont");
        two.appendChild(card);
        // move to vital
      } else {
        core.appendChild(card);
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
