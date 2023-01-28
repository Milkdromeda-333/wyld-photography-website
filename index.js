const navBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".nav");
const nav = document.querySelector("nav");
let isActive = false;

navBtn.addEventListener("click", () => {
    navEventListener();
    if (navbar.classList.includes("active")) {
        document.querySelector("body").addEventListener("click", navEventListener);
    } else {
        document.querySelector("body").removeEventListener("click", navEventListener);
    }

});

const navEventListener = () => {
    navbar.classList.toggle("active");
    console.log("toggle");
};
