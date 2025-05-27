function Event(name, type, date, location, seatsAvailable, maxSeats) {
  this.name = name;
  this.type = type;
  this.date = new Date(date);
  this.location = location;
  this.seatsAvailable = seatsAvailable;
  this.maxSeats = maxSeats || 20; // default max seats
}

const communityEvents = [
  new Event("Jazz Night", "music", "2025-06-10", "City Hall", 5, 20),
  new Event("Baking Workshop", "workshop", "2025-07-05", "Community Center", 0, 15),
  new Event("Rock Concert", "music", "2025-08-15", "Stadium", 20, 20),
];

const eventsContainer = document.querySelector("#events-container");
function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });
}
function applyStyles(el, styles) {
  for (const key in styles) {
    el.style[key] = styles[key];
  }
}

function renderEvents() {
  eventsContainer.innerHTML = "";

  communityEvents.forEach((event) => {
    const card = document.createElement("div");
    applyStyles(card, {
      border: "2px solid #6a8caf",
      borderRadius: "12px",
      padding: "16px",
      width: "320px",
      boxShadow: "0 6px 12px rgba(106, 140, 175, 0.2)",
      background: "#f0f6fb",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.3s ease, boxShadow 0.3s ease",
      cursor: "default",
    });

    card.addEventListener("mouseenter", () => {
      applyStyles(card, {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 20px rgba(106, 140, 175, 0.4)",
        cursor: "pointer"
      });
    });

    card.addEventListener("mouseleave", () => {
      applyStyles(card, {
        transform: "translateY(0)",
        boxShadow: "0 6px 12px rgba(106, 140, 175, 0.2)",
        cursor: "default"
      });
    });
    const header = document.createElement("div");
    header.textContent = `${event.name} (${event.type.toUpperCase()})`;
    applyStyles(header, {
      fontSize: "1.4em",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "8px",
    });
    card.appendChild(header);
    const info = document.createElement("div");
    applyStyles(info, { color: "#34495e", fontSize: "0.95em" });
    info.innerHTML = `
      <p> Date: ${formatDate(event.date)}</p>
      <p> Location: ${event.location}</p>
    `;
    card.appendChild(info);
    const seatBar = document.createElement("div");
    applyStyles(seatBar, {
      height: "10px",
      backgroundColor: "#ddd",
      borderRadius: "5px",
      overflow: "hidden",
      marginTop: "10px",
    });

    const seatFill = document.createElement("div");
    seatFill.style.width = (event.seatsAvailable / event.maxSeats) * 100 + "%";
    applyStyles(seatFill, {
      height: "100%",
      backgroundColor: "#2980b9",
      transition: "width 0.4s ease",
    });

    seatBar.appendChild(seatFill);
    card.appendChild(seatBar);
    const seatStatus = document.createElement("div");
    seatStatus.textContent = event.seatsAvailable > 0
      ? ` Seats available: ${event.seatsAvailable} / ${event.maxSeats}`
      : " Sold out";
    applyStyles(seatStatus, {
      marginTop: "6px",
      fontWeight: "600",
      color: "#2c3e50",
      fontSize: "0.9em",
    });
    card.appendChild(seatStatus);
    const btnContainer = document.createElement("div");
    applyStyles(btnContainer, { marginTop: "12px" });
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    applyStyles(registerBtn, {
      cursor: "pointer",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "0.9em",
      backgroundColor: "#27ae60",
      color: "white",
      marginRight: "10px",
      transition: "background-color 0.25s ease",
    });
    registerBtn.disabled = event.seatsAvailable === 0;

    registerBtn.addEventListener("mouseenter", () => {
      if (!registerBtn.disabled) registerBtn.style.backgroundColor = "#2ecc71";
    });
    registerBtn.addEventListener("mouseleave", () => {
      if (!registerBtn.disabled) registerBtn.style.backgroundColor = "#27ae60";
    });

    registerBtn.addEventListener("click", () => {
      if (event.seatsAvailable > 0) {
        if (confirm(`Register for "${event.name}"?`)) {
          event.seatsAvailable--;
          renderEvents();
        }
      }
    });
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    applyStyles(cancelBtn, {
      cursor: "pointer",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "0.9em",
      backgroundColor: "#c0392b",
      color: "white",
      transition: "background-color 0.25s ease",
    });
    cancelBtn.disabled = event.seatsAvailable === event.maxSeats;

    cancelBtn.addEventListener("mouseenter", () => {
      if (!cancelBtn.disabled) cancelBtn.style.backgroundColor = "#e74c3c";
    });
    cancelBtn.addEventListener("mouseleave", () => {
      if (!cancelBtn.disabled) cancelBtn.style.backgroundColor = "#c0392b";
    });

    cancelBtn.addEventListener("click", () => {
      if (event.seatsAvailable < event.maxSeats) {
        if (confirm(`Cancel registration for "${event.name}"?`)) {
          event.seatsAvailable++;
          renderEvents();
        }
      }
    });

    btnContainer.appendChild(registerBtn);
    btnContainer.appendChild(cancelBtn);
    card.appendChild(btnContainer);

    eventsContainer.appendChild(card);
  });
}

renderEvents();
