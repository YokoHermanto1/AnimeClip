//Menu Function:

let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");
let menu = document.querySelector(".nav-links");

function closeMenu(){
    menu.style.right = "-250px";
}

function openMenu(){
    menu.style.right = "0";
}

