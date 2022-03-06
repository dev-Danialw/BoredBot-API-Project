// let activity = document.getElementById("activity");
// const boredBtn = document.getElementById("boredBtn");

// boredBtn.addEventListener("click", () => {
//   return console.log("hi");
// });

fetch("https://apis.scrimba.com/bored/api/activity")
  .then((response) => response.json())
  .then((data) => console.log("the data is ", data));
