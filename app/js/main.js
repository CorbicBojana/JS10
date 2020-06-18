const mobileButton = document.getElementById("nav_mobile_button");
const mobileButtonOpen = document.getElementById("nav_mobile_button_open");
const nav = document.getElementById("nav");
let openNav = false;

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

function sliderButtonChange() {
    let i = 0;

    setInterval(function() {

        for (let x=0; x < sliderButton.length; x++) {
            sliderButton[x].classList.remove("active");
        }

        sliderButton[i].classList.add("active");
    
        if (i === 3) {
            i = 0
        }
        else {
            i++;
           }
        }, 3000)
};

sliderButtonChange();

// Check email format
const form = document.getElementById("form");
const email = document.getElementById("form_input");

// Show error message
function showError(message) {
    var small = document.getElementById("small");
    small.innerText = message;
  }
  
// Hide error message
function showSucces(input) {
    //
  }

// Check required fields
function checkRequired(input) {
      if (input.value.trim() === "") {
        showError("Cannot be empty");
      } else {
        showSucces(input);
      }
  }

function checkEmail(input) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (reg.test(input.value.trim())) {
      showSucces(input);
    } else {
      showError("Looks like this is not an email");
    }
  }
  
  form.addEventListener("submit", function(e, input) {
    e.preventDefault();
  
    checkRequired(email);
    checkEmail(email);
  });