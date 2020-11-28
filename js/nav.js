const navToggle = document.querySelector(".menue-btn");
const navClose = document.querySelector(".close");
const nav = document.querySelector('nav');

navToggle.addEventListener('click',function kit(e) {
    e.preventDefault();
    document.body.classList.toggle("nav_is_open")

});
navClose.addEventListener('click',function kit(e) {
    e.preventDefault();
    document.body.classList.toggle("nav_is_open")

});
nav.addEventListener('click', _ => {
    document.body.classList.remove("nav_is_open")
});