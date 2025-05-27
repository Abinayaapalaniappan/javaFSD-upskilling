const events = [
  { name: "Jazz Night", type: "music", date: "2025-06-10", location: "City Hall" },
  { name: "Baking Workshop", type: "workshop", date: "2025-07-05", location: "Community Center" },
  { name: "Yoga Class", type: "sports", date: "2025-06-20", location: "Park" }
];
const filterEventsByType = (eventList = [], type = "music") => {
  const filtered = eventList.filter(({ type: t }) => t === type);
  return filtered.length ? filtered : [{ name: "No Events", type, location: "N/A" }];
};
const styledLog = (strings, ...values) => {
  const msg = strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
  console.log(` ${msg}`);
};
const displayEventDetails = (eventList = []) => {
  eventList.forEach(({ name, type, location, date }) => {
    const badge = {
      music: "🎶",
      workshop: "🛠️",
      sports: "🏃"
    }[type] || "📌";

    styledLog`${badge} ${type.toUpperCase()} - "${name}" on ${date} at ${location}`;
  });
};
const musicEvents = filterEventsByType(events, "music");
displayEventDetails(musicEvents);
