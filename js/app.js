const list = document.querySelector(".list")
const menu = document.querySelector(".menu__icon");
const xmenu = document.querySelector(".menu__close__icon");
const body=document.querySelector("body")
menu.addEventListener("click", function () {
    list.classList.add("show")
    xmenu.classList.add("show")
    body.classList.add("show")
    menu.classList.add("hide")
})
xmenu.addEventListener("click", function () {
    list.classList.remove("show")
    xmenu.classList.remove("show")
    menu.classList.remove("hide")
    body.classList.remove("show");
})