var form = document.querySelector("form");
var errorMessage = document.querySelector("form p");
var successMessage = document.querySelector(".message");


activateFormButton();

function activateFormButton() {
  form.addEventListener("submit", formSubmission);
}

function deActivateFormButton(){
  form.removeEventListener("submit", formSubmission);
  form.addEventListener("submit", function(e){
    e.preventDefault();
  });
}

function formSubmission(e) {
  e.preventDefault();
  let email = e.srcElement[0];
  if (email.validity.patternMismatch || email.value === "") {
    displayError(email);
  } else {
    openSuccessWindow(email);
  }
  email.addEventListener("focus", function() {
    errorMessage.classList.remove("invalid");
    email.classList.remove("invalid");
  })
}

function displayError(email) {
  errorMessage.classList.add("invalid");
  email.classList.add("invalid");
}

function openSuccessWindow(email){
  deActivateFormButton();
  successMessage.style.display = "grid";
  email.value = "";
  successMessage.firstElementChild.addEventListener("click", function() {
    successMessage.style.display = "none";
    activateFormButton();
  });
}
