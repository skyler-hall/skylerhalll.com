// Theme toggle: light green day / dark purple night.
// First visit follows the visitor's system preference;
// after they use the toggle, their choice is saved in localStorage.

const themeButton = document.getElementById("theme-btn");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
  themeButton.textContent = 