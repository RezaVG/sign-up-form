function onChange() {
  const password = document.querySelector("input[id=pass]");
  const confirm = document.querySelector("input[id=pass-confirm]");
  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Passwords do not match");
  }
}
