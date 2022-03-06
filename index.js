const btn = document.getElementById("btn");
const idea = document.getElementById("idea");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => (idea.textContent = data.activity));
});
