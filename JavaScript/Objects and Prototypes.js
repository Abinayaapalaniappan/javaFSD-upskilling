class Event {
  constructor(name, date, location, seatsAvailable) {
    this.name = name;
    this.date = new Date(date);
    this.location = location;
    this.seatsAvailable = seatsAvailable;
  }
  checkAvailability() {
    return this.seatsAvailable > 0 
      ? ` ${this.name} has seats available! ` 
      : ` ${this.name} is sold out! `;
  }
  daysUntil() {
    const today = new Date();
    const diffMs = this.date - today;
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return days > 0 ? `${days} day(s) until event.` : "Event date has passed or is today.";
  }
  formattedDate() {
    return this.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
  static listProperties(obj) {
    console.groupCollapsed(` Listing properties of ${obj.name}`);
    for (const [key, value] of Object.entries(obj)) {
      console.log(`• ${key}: ${value}`);
    }
    console.groupEnd();
  }
}
const conference = new Event("Tech Conference", "2025-09-15", "Convention Center", 100);
console.log(`%c${conference.checkAvailability()}`, "color: green; font-weight: bold; font-size: 1.1em;");
console.log(` ${conference.daysUntil()}`);
console.log(` Date: %c${conference.formattedDate()}`, "color: dodgerblue;");
console.log(` Location: %c${conference.location}`, "color: orange; font-weight: bold;");
Event.listProperties(conference);
