class Event {
  constructor(name, type, date, location) {
    this.name = name;
    this.type = type;         
    this.date = new Date(date);
    this.location = location;
  }
  getDescription() {
    const typeEmojis = {
      music: "🎵",
      workshop: "🛠️",
      sports: "🏅"
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", { 
      weekday: "short", month: "short", day: "numeric", year: "numeric" 
    }).format(this.date);

    return `${typeEmojis[this.type] || "📅"} ${this.name} (${this.type.charAt(0).toUpperCase() + this.type.slice(1)}) — ${formattedDate} @ ${this.location}`;
  }
}
const communityEvents = [
  new Event("Jazz Night", "music", "2025-06-10", "City Hall"),
  new Event("Baking Workshop", "workshop", "2025-07-05", "Community Center"),
  new Event("Rock Concert", "music", "2025-08-15", "Stadium"),
  new Event("Yoga Class", "sports", "2025-06-20", "Park")
];
console.groupCollapsed("%c All Community Events", "color: darkviolet; font-weight: bold;");
communityEvents.forEach(e => console.log(e.getDescription()));
console.groupEnd();
const musicEvents = communityEvents.filter(e => e.type === "music");
console.groupCollapsed("%c Music Events", "color: teal; font-weight: bold;");
musicEvents.forEach(e => console.log(e.getDescription()));
console.groupEnd();
const displayCards = communityEvents.map(e => `${e.type.charAt(0).toUpperCase() + e.type.slice(1)} on ${e.name}`);
console.log("%c Display Cards:", "color: orangered; font-weight: bold;");
console.table(displayCards);
const summaryByType = communityEvents.reduce((acc, e) => {
  acc[e.type] = (acc[e.type] || 0) + 1;
  return acc;
}, {});

console.log("%c Event Summary by Type:", "color: navy; font-weight: bold;");
console.table(summaryByType);
