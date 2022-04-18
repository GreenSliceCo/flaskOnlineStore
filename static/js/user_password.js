let myInput = document.getElementById("floatingPassword");
let currentPassword = document.getElementById("currentPassword");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
var submitBtn = document.getElementById("submitBtn");

document.getElementById("Profile").style.display = "block";

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
//    submitBtn.disabled = false;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
//    submitBtn.disabled = true;
}

  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
//    submitBtn.disabled = false;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
//    submitBtn.disabled = true;
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
//    submitBtn.disabled = false;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
//    submitBtn.disabled = true;
  }

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
//    submitBtn.disabled = false;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
//    submitBtn.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    currentPassword.onkeyup = function() {
        if (current_user.password == currentPassword.value) {
            submitBtn.disabled = false;
        }
        else {
            submitBtn.disabled = true;
        }
    }
});
