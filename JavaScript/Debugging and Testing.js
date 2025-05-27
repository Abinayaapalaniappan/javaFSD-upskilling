form.addEventListener("submit", function (e) {
  e.preventDefault();

  const { name: { value: userName }, email: { value: userEmail }, event: { value: selectedEvent } } = form.elements;
  const timestamp = new Date().toLocaleTimeString();

  console.group(`📝 Form Submission at ${timestamp}`);
  console.log(` Name: ${userName}`);
  console.log(` Email: ${userEmail}`);
  console.log(` Event: ${selectedEvent}`);
  console.groupEnd();

});
