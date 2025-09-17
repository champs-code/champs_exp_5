const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const message = document.getElementById("message");
  document.querySelectorAll(".error").forEach(el => el.style.display = "none");

  if (name.value.trim() === "") {
    showError(name, "Name cannot be empty");
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    showError(email, "Email cannot be empty");
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    showError(email, "Enter a valid email address");
    isValid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password cannot be empty");
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Please confirm your password");
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});

function showError(input, message) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.innerText = message;
  errorElement.style.display = "block";
}
