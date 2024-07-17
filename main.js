const nav = document.querySelector("#navegacion");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



open.addEventListener("click", () => {
    navegacion.classList.add("visible");
})
close.addEventListener("click", () => {
    navegacion.classList.remove("visible");
})
const nav2 = document.querySelector("#navegacionc");
open.addEventListener("click", () => {
    navegacionc.classList.add("visible");
})
close.addEventListener("click", () => {
    navegacionc.classList.remove("visible");
})

const hovernav = document.getElementById("#navho");
const menuopen = document.querySelector("#menuon");
const activemenu = document.querySelector("#active");
let isHoverActive = false;

menuopen.addEventListener('mouseover', () => {
    navho.classList.remove('hovermov');

})
menuopen.addEventListener('mouseout', () => {
    navho.classList.add('hovermov');



})
