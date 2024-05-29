let menu = document.querySelector("#menu_box>p");
let toMenu = document.querySelector("#menu_box>div");

menu.addEventListener("click",()=>{
    toMenu.classList.toggle("open");
});