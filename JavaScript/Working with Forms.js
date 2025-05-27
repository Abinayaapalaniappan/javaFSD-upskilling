const form = document.getElementById("registrationForm");
const submitBtn = form.querySelector("button[type='submit']");

const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  event: document.getElementById("eventError"),
};

const successMessage = document.createElement("p");
successMessage.style.color = "green";
successMessage.style.fontWeight = "bold";
successMessage.style.marginTop = "10px";
form.appendChild(successMessage);

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const clearErrors = () => {
  Object.values(errors).forEach(span => (span.textContent = ""));
  successMessage.textContent = "";
};

const setError = (field, message) => {
  errors[field].textContent = ` ${message}`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  submitBtn.disabled = true;
  successMessage.textContent = "";

  const { name, email, event: selectedEvent } = form.elements;
  let hasError = false;

  if (!name.value.trim()) {
    setError("name", "Name is required.");
    if (!hasError) name.focus();
    hasError = true;
  }

  if (!email.value.trim() || !validateEmail(email.value.trim())) {
    setError("email", "Please enter a valid email.");
    if (!hasError) email.focus();
    hasError = true;
  }

  if (!selectedEvent.value) {
    setError("event", "Please select an event.");
    if (!hasError) selectedEvent.focus();
    hasError = true;
  }

  if (!hasError) {
    console.log(" Registration successful:", {
      name: name.value,
      email: email.value,
      event: selectedEvent.value,
    });
    successMessage.textContent = " Registration successful! Thank you.";
    form.reset();
  }

  submitBtn.disabled = false;
});
