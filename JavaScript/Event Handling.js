// Event constructor
function Event(name, type, date, location, seatsAvailable) {
  this.name = name;
  this.type = type;
  this.date = new Date(date);
  this.location = location;
  this.seatsAvailable = seatsAvailable;
}

const communityEvents = [
  new Event("Jazz Night", "music", "2025-06-10", "City Hall", 5),
  new Event("Baking Workshop", "workshop", "2025-07-05", "Community Center", 0),
  new Event("Rock Concert", "music", "2025-08-15", "Stadium", 20),
  new Event("Yoga Class", "sports", "2025-06-20", "Park", 10),
];

const eventsContainer = document.querySelector("#events-container");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");

// Helper to capitalize first letter
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatDate = date =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
const categoryColors = {
  music: "#3498db",
  workshop: "#f39c12",
  sports: "#2ecc71",
};
function renderEvents() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  eventsContainer.innerHTML = "";

  const filteredEvents = communityEvents.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.type === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });

  if (filteredEvents.length === 0) {
    eventsContainer.innerHTML = `<p style="color:gray;font-style:italic;">No events found.</p>`;
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    Object.assign(card.style, {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "15px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease-in-out",
    });

    card.onmouseover = () => (card.style.transform = "scale(1.02)");
    card.onmouseout = () => (card.style.transform = "scale(1)");

    const badgeColor = categoryColors[event.type] || "#888";

    card.innerHTML = `
      <h3 style="margin-bottom: 5px;">${event.name}</h3>
      <span style="background:${badgeColor}; color:white; padding:2px 8px; border-radius:12px; font-size: 0.8em;">
        ${capitalize(event.type)}
      </span>
      <p style="margin:6px 0;"><strong> Date:</strong> ${formatDate(event.date)}</p>
      <p><strong> Location:</strong> ${event.location}</p>
      <p><strong> Seats:</strong> ${event.seatsAvailable}</p>
    `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = event.seatsAvailable > 0 ? "Register" : "Sold Out";
    registerBtn.disabled = event.seatsAvailable === 0;
    registerBtn.title = event.seatsAvailable === 0 ? "No seats available" : "Click to register";

    Object.assign(registerBtn.style, {
      padding: "8px 14px",
      marginTop: "8px",
      backgroundColor: event.seatsAvailable > 0 ? "#27ae60" : "#bdc3c7",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: event.seatsAvailable > 0 ? "pointer" : "not-allowed",
      fontWeight: "bold",
      transition: "background 0.3s ease",
    });

    registerBtn.onclick = function () {
      if (event.seatsAvailable > 0) {
        event.seatsAvailable--;
        renderEvents(); // Refresh UI
      }
    };

    card.appendChild(registerBtn);
    eventsContainer.appendChild(card);
  });
}
searchInput.addEventListener("input", renderEvents);
categoryFilter.addEventListener("change", renderEvents);
renderEvents();
