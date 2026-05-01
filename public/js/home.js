import { dataExport } from "./common.js";

document.addEventListener("DOMContentLoaded",()=>{
  const container = document.querySelector(".container");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

const signinbtn = document.querySelector("#sign-in");
const signupbtn = document.querySelector("#sign-up");

const remove1 = document.querySelector(".remove-btn1");
const remove2 = document.querySelector(".remove-btn2");

const btnF = document.querySelector("#click_Future");
btnF.addEventListener("click", () => {
  const inputname=document.querySelector("#names");
  const inputemail=document.querySelector("#emailss");
  const name = inputname.value;
const email = inputemail.value;
  dataExport(name,email);
});
signinbtn.addEventListener("click", () => {
  form1.classList.add("active");
  container.classList.add("blur");
});
remove1.addEventListener("click", () => {
  form1.classList.remove("active");
  container.classList.remove("blur");
});
signupbtn.addEventListener("click", () => {
  form2.classList.add("active");
  container.classList.add("blur");
});
remove2.addEventListener("click", () => {
  form2.classList.remove("active");
  container.classList.remove("blur");
});

})
