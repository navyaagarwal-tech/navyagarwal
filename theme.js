// Shared dark/light theme handling — applied early to avoid flash of wrong theme.
(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  window.toggleTheme = function () {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
  };
})();
