// app.js
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Check for initial dark mode preference from localStorage
const isDarkMode = localStorage.getItem('darkMode');
if (isDarkMode) {
  body.classList.add('dark-mode');
}

// Save dark mode preference to localStorage on toggle
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkModeEnabled);
});
