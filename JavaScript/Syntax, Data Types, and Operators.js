// Event details (constants)
const eventName = "🎉 Tech Conference 2025";
const rawDate = new Date("2025-06-15");

// Format date using Intl API for better presentation
const eventDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
}).format(rawDate);

// Mutable value for available seats
let availableSeats = 100;

// Utility to log styled messages to the console
function logStyledMessage(label, message, color = "dodgerblue") {
    console.log(`%c${label}: %c${message}`, "font-weight:bold; color:white; background:" + color + "; padding:2px 6px; border-radius:4px;", "color:" + color + "; font-weight:bold;");
}
function showEventInfo() {
    console.log("📅 Event Details:");
    logStyledMessage("Event", eventName);
    logStyledMessage("Date", eventDate);
    logStyledMessage("Seats Available", availableSeats);
}
function registerAttendee(name) {
    if (availableSeats > 0) {
        availableSeats--;
        logStyledMessage("Registered", `${name} has successfully registered.`);
        logStyledMessage("Seats Left", availableSeats, "green");
    } else {
        logStyledMessage("Full", `Sorry ${name}, no seats left!`, "red");
    }
}
function cancelRegistration(name) {
    availableSeats++;
    logStyledMessage("↩️ Cancelled", `${name} has cancelled their registration.`);
    logStyledMessage("Seats Now", availableSeats, "orange");
}
showEventInfo();
console.log("--------------------------------------------------");
registerAttendee("Alice");
registerAttendee("Bob");

console.log("--------------------------------------------------");

cancelRegistration("Alice");
