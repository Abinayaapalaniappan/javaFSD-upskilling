<div id="spinner"> Loading events...</div>
<div id="events-container"></div>
#spinner {
  font-weight: bold;
  text-align: center;
  margin: 20px;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.event-card {
  border: 1px solid #ccc;
  border-left: 5px solid #3498db;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.event-card:hover {
  transform: scale(1.01);
}

@keyframes fadeIn {
  to { opacity: 1; }
}
const container = document.querySelector("#events-container");
const spinner = document.querySelector("#spinner");

async function loadEvents() {
  spinner.style.display = "block";
  container.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Network error");
    
    const data = await res.json();
    spinner.style.display = "none";

    if (data.length === 0) {
      container.innerHTML = "<p>No events found.</p>";
      return;
    }

    data.slice(0, 5).forEach(post => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    spinner.textContent = " Error loading events. Please try again later.";
  }
}

loadEvents();
