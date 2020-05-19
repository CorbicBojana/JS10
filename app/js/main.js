var mobile_button = document.getElementById("nav_mobile_button");
var mobile_button_open = document.getElementById("nav_mobile_button_open");
var nav = document.getElementById("nav");
var open_nav = false;

mobile_button.addEventListener("click", function() {
    if (open_nav === false) {
        mobile_button_open.classList.add("nav_mobile_button_close");
        mobile_button_open.classList.remove("nav_mobile_button_open");
        nav.style.display = "flex";

        open_nav = true
    } else {
        mobile_button_open.classList.add("nav_mobile_button_open");
        mobile_button_open.classList.remove("nav_mobile_button_close");
        nav.style.display = "none";

        open_nav = false
    }
})