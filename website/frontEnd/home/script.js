// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}
