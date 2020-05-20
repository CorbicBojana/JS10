var mobileButton = document.getElementById("nav_mobile_button");
var mobileButtonOpen = document.getElementById("nav_mobile_button_open");
var nav = document.getElementById("nav");
var openNav = false;

mobileButton.addEventListener("click", function() {
    if (openNav === false) {
        mobileButtonOpen.classList.add("nav_mobile_button_close");
        mobileButtonOpen.classList.remove("nav_mobile_button_open");
        nav.style.display = "flex";

        openNav = true
    } else {
        mobileButtonOpen.classList.add("nav_mobile_button_open");
        mobileButtonOpen.classList.remove("nav_mobile_button_close");
        nav.style.display = "none";

        openNav = false
    }
})

var sliderButton = document.getElementsByClassName("slider_button_link");

for (var i=0; i < sliderButton.length; i++) {
    sliderButton[i].addEventListener("click", function(e) {

        for (var y=0; y < sliderButton.length; y++) {
            sliderButton[y].classList.remove("active");
            e.target.classList.add("active");
        }
    })
}