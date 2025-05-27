const events = [];
function addEvent(name, date, category, seats) {
  events.push({ name, date, category, availableSeats: seats });
}
function createCategoryTracker() {
  const registrations = {};
  let total = 0;

  return function track(category) {
    total++;
    registrations[category] = (registrations[category] || 0) + 1;

    console.log(
      `%c ${category} Registrations: ${registrations[category]} | Total: ${total}`,
      "color: teal; font-weight: bold;"
    );
  };
}

// 🎯 Initialize category tracker
const trackRegistrationByCategory = createCategoryTracker();
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  const today = new Date();

  console.groupCollapsed(` Attempting registration for: %c${eventName}`, "color: navy; font-weight: bold;");
  if (!event) {
    console.error(" Event not found.");
    console.groupEnd();
    return;
  }

  const eventDate = new Date(event.date);

  if (eventDate <= today) {
    console.error(" Cannot register for a past event.");
    console.groupEnd();
    return;
  }

  if (event.availableSeats <= 0) {
    console.error(" No seats available.");
    console.groupEnd();
    return;
  }

  event.availableSeats--;
  console.log(` Registered for: %c${event.name}`, "color: green;");
  console.log(` Seats remaining: %c${event.availableSeats}`, "color: darkorange;");
  trackRegistrationByCategory(event.category);
  console.groupEnd();
}
function filterEvents(callback) {
  return events.filter(callback);
}
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short", year: "numeric", month: "short", day: "numeric"
  }).format(new Date(date));
}
addEvent("Tech Conference 2025", "2025-06-15", "Technology", 100);
addEvent("Marketing Summit", "2025-08-10", "Business", 50);
addEvent("AI Expo 2024", "2024-03-10", "Technology", 0);
addEvent("Design Workshop", "2025-07-01", "Design", 20);
const techEvents = filterEvents(e =>
  e.category === "Technology" &&
  new Date(e.date) > new Date() &&
  e.availableSeats > 0
);
console.log("%c Upcoming Tech Events with Available Seats:", "color: purple; font-weight: bold;");
techEvents.forEach(e => {
  console.log(`- ${e.name} (%c${formatDate(e.date)}%c, ${e.availableSeats} seats)`,
    "color: dodgerblue;", "color: default;");
});
registerUser("Tech Conference 2025");
registerUser("Design Workshop");
registerUser("AI Expo 2024"); // Should fail
