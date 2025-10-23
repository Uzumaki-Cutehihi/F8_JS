const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password_confirm");
const submitBtn = document.getElementById("submit_btn");

// flag check
let validationStates = {
  username: false,
  email: false,
  password: false,
  password_confirm: false,
};

function emailChecker(email) {
  if (email === "") {
    return false;
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

function usernameChecker(username) {
  if (username === "") {
    return false;
  }
  return username.length > 5;
}

function passwordChecker(password) {
  if (
    !password.includes("!") &&
    !password.includes("@") &&
    !password.includes("#") &&
    !password.includes("%")
  ) {
    return false;
  } else if (password.length < 8) {
    return false;
  } else if (!/[A-Z]/.test(password)) {
    return false;
  } else if (!/[a-z]/.test(password)) {
    return false;
  } else if (!/[0-9]/.test(password)) {
    return false;
  } else if (password === "") {
    return false;
  }

  return true;
}

function passwordRepeatChecker(password, repeat) {
  if (!passwordChecker(repeat)) {
    return false;
  }
  return password === repeat;
}

// UI lỗi
function showFieldError(fieldName) {
  const input = document.getElementById(fieldName);
  const iconContainer = document.getElementById(`${fieldName}-icon`);
  const successIcon = document.getElementById(`${fieldName}-success`);
  const errorIcon = document.getElementById(`${fieldName}-error`);
  const errorMsg = document.getElementById(`${fieldName}-error-msg`);

  input.classList.remove("border-gray-300", "border-green-500");
  input.classList.add("border-red-500");

  iconContainer.classList.remove("hidden");
  successIcon.classList.add("hidden");
  errorIcon.classList.remove("hidden");

  errorMsg.classList.remove("hidden");
}

// UI đúng
function showFieldSuccess(fieldName) {
  const input = document.getElementById(fieldName);
  const iconContainer = document.getElementById(`${fieldName}-icon`);
  const successIcon = document.getElementById(`${fieldName}-success`);
  const errorIcon = document.getElementById(`${fieldName}-error`);
  const errorMsg = document.getElementById(`${fieldName}-error-msg`);

  input.classList.remove("border-gray-300", "border-red-500");
  input.classList.add("border-green-500");

  iconContainer.classList.remove("hidden");
  errorIcon.classList.add("hidden");
  successIcon.classList.remove("hidden");

  errorMsg.classList.add("hidden");
}

function hideFieldValidation(fieldName) {
  const input = document.getElementById(fieldName);
  const iconContainer = document.getElementById(`${fieldName}-icon`);
  const errorMsg = document.getElementById(`${fieldName}-error-msg`);

  input.classList.remove("border-red-500", "border-green-500");
  input.classList.add("border-gray-300");

  iconContainer.classList.add("hidden");
  errorMsg.classList.add("hidden");
}

function validateField(fieldName, value) {
  let isValid = false;

  switch (fieldName) {
    case "username":
      isValid = usernameChecker(value);
      break;
    case "email":
      isValid = emailChecker(value);
      break;
    case "password":
      isValid = passwordChecker(value);
      break;
    case "password_confirm":
      isValid = passwordRepeatChecker(password.value, value);
      break;
  }

  validationStates[fieldName] = isValid;

  if (isValid) {
    showFieldSuccess(fieldName);
  } else {
    showFieldError(fieldName);
  }
}

submitBtn.onclick = (e) => {
  e.preventDefault();

  validateField("username", username.value);
  validateField("email", email.value);
  validateField("password", password.value);
  validateField("password_confirm", passwordRepeat.value);

  const allValid = Object.values(validationStates).every(
    (state) => state === true
  );

  if (allValid) {
    alert("Account created successfully!");
  }
};

username.addEventListener("blur", () => {
  validateField("username", username.value);
});

email.addEventListener("blur", () => {
  validateField("email", email.value);
});

password.addEventListener("blur", () => {
  validateField("password", password.value);
  if (passwordRepeat.value.trim() !== "") {
    validateField("password_confirm", passwordRepeat.value);
  }
});

passwordRepeat.addEventListener("blur", () => {
  validateField("password_confirm", passwordRepeat.value);
});
