// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

let navbar = document.getElementById("header");

let shrink = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > shrink) {
        navbar.classList.add("shrink")
    } else {
        navbar.classList.remove("shrink");
    }
}