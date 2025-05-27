const form = document.getElementById("registrationForm");
const submitBtn = form.querySelector("button[type='submit']");

let statusMsg = document.getElementById("statusMessage");
if (!statusMsg) {
  statusMsg = document.createElement("p");
  statusMsg.id = "statusMessage";
  statusMsg.style.marginTop = "10px";
  form.appendChild(statusMsg);
}

const spinner = document.createElement("span");
spinner.textContent = " ⏳";  
spinner.style.display = "none";

statusMsg.appendChild(spinner);

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function submitRegistration(userData) {
  try {
    statusMsg.textContent = "Submitting registration...";
    statusMsg.appendChild(spinner);
    spinner.style.display = "inline";

    submitBtn.disabled = true;

    await delay(2000); 

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    spinner.style.display = "none";
    statusMsg.textContent = " Registration successful!";
    form.reset();
  } catch (error) {
    spinner.style.display = "none";
    statusMsg.textContent = " Registration failed. ";
    showRetryButton();
    console.error(error);
  } finally {
    submitBtn.disabled = false;
  }
}

function showRetryButton() {
  let retryBtn = document.getElementById("retryBtn");
  if (!retryBtn) {
    retryBtn = document.createElement("button");
    retryBtn.id = "retryBtn";
    retryBtn.textContent = "Retry";
    retryBtn.style.marginLeft = "10px";
    retryBtn.style.cursor = "pointer";
    statusMsg.appendChild(retryBtn);
  }
  retryBtn.onclick = () => {
    retryBtn.remove();
    statusMsg.textContent = "";
    form.dispatchEvent(new Event("submit")); // Trigger submit again
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, event: selectedEvent } = form.elements;

  if (!name.value.trim() || !email.value.trim() || !selectedEvent.value) {
    alert("Please fill all fields correctly.");
    return;
  }

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: selectedEvent.value,
  };

  submitRegistration(userData);
});
