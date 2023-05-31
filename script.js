const formEl = document.querySelector("form");
const formControlEl = document.querySelector(".form-control");

const emailInput = document.querySelector('input[type="email"]');

function resetError() {
  formControlEl.classList.remove("invalid");
  emailInput.dataset.valid = "";
}

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

emailInput.addEventListener("input", resetError);

emailInput.addEventListener("blur", resetError);

formEl.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(formEl);
  const email = data.get("email");

  if (email.trim() && emailRegExp.test(email)) {
    window.location.href = "/newsletter-sign-up-form-with-success-message-solution/success.html";
  } else {
    e.target.reset();
    formControlEl.classList.add("invalid");
    emailInput.dataset.valid = false;
  }
});
