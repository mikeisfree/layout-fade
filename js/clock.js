const timeZones = [
  { city: "WAW", name: "Warsaw", timeZone: "Europe/Warsaw" },
  { city: "NY", name: "New York", timeZone: "America/New_York" },
  { city: "PAR", name: "Paris", timeZone: "Europe/Paris" },
  { city: "AMS", name: "Amsterdam", timeZone: "Europe/Amsterdam" },
  { city: "LON", name: "London", timeZone: "Europe/London" },
  { city: "QUE", name: "Quebec", timeZone: "America/Toronto" },
];

let currentCityIndex = 0;

function updateTime() {
  const city = timeZones[currentCityIndex];
  const now = new Date();

  // Options for formatting the time
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: city.timeZone,
    timeZoneName: "short", // Displays the time zone abbreviation (e.g., CEST, EDT)
  };

  // Format the time using Intl.DateTimeFormat
  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(now);
  document.getElementById(
    "clock"
  ).textContent = `${city.city}. ${formattedTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Switch between cities on click
document.getElementById("clock").addEventListener("click", function () {
  currentCityIndex = (currentCityIndex + 1) % timeZones.length;
  updateTime();
});

// Initial time update
updateTime();

// Add this to your existing script or create a new one
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save the user's preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Check for saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }
});
