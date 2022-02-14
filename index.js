let aside = document.querySelector(".aside-docs");
let addBtn = document.querySelector(".add-btn");
let closeBtn = document.querySelector(".close-btn");
const add = () => { aside.classList.add("responsive"); addBtn.style.display = "none"; }
const remove = () => { aside.classList.remove("responsive"); addBtn.style.display = "block"; }
closeBtn.addEventListener("click", remove);
addBtn.addEventListener("click", add);