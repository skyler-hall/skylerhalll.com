// Theme toggle: light green day / dark purple night.
// First visit follows the visitor's system preference;
// after they use the toggle, their choice is saved in localStorage.

// "☀" is the sun symbol, "☾" is the moon symbol.
const SUN = "☀";
const MOON = "☾";

const themeButton = document.getElementById("theme-btn");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
  themeButton.textContent = MOON;
}

themeButton.addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";
  root.dataset.theme = isDark ? "" : "dark";
  themeButton.textContent = isDark ? SUN : MOON;
  localStorage.setItem("theme", isDark ? "light" : "dark");
});
