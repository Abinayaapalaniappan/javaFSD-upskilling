const events = [
  { name: "Tech Conference 2025", date: "2025-06-15", availableSeats: 100 },
  { name: "AI Expo 2024", date: "2024-03-10", availableSeats: 0 },
  { name: "Web Dev Meetup", date: "2025-07-20", availableSeats: 50 },
  { name: "Old Event", date: "2023-12-01", availableSeats: 25 }
];

const today = new Date();
function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: "short", year: "numeric", month: "long", day: "numeric"
  }).format(new Date(dateStr));
}
function daysUntil(dateStr) {
  const eventDate = new Date(dateStr);
  const diffTime = eventDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log("%c Upcoming Events:", "color: teal; font-weight: bold; font-size: 16px;");
events.forEach(event => {
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > today;
  const hasSeats = event.availableSeats > 0;

  if (isUpcoming && hasSeats) {
    console.groupCollapsed(`%c ${event.name}`, "color: green; font-weight: bold;");
    console.log(` Date: %c${formatDate(event.date)}`, "color: dodgerblue;");
    console.log(` Seats Available: %c${event.availableSeats}`, "color: orange;");
    console.log(` Starts in: %c${daysUntil(event.date)} days`, "color: purple;");
    console.groupEnd();
  } else {
    console.log(`%c Skipping '${event.name}' — Either in the past or full.`, "color: gray;");
  }
});
function register(eventName) {
  console.log(`\n Attempting registration for: %c${eventName}`, "color: navy; font-weight: bold;");
  
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found.");
    const eventDate = new Date(event.date);
    if (eventDate <= today) throw new Error("This event is in the past.");
    if (event.availableSeats <= 0) throw new Error("No seats left!");
    event.availableSeats--;
    console.log(`%c Success! You are registered for ${event.name}.`, "color: green;");
    console.log(`%cRemaining seats: ${event.availableSeats}`, "color: darkorange;");
  } catch (error) {
    console.error(`%c Registration failed: ${error.message}`, "color: red; font-weight: bold;");
  }
}
register("Tech Conference 2025");
register("AI Expo 2024");
register("Nonexistent Event"); // Extra test case
