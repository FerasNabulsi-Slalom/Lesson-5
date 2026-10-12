const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  body.classList.toggle('dark', isDark);
  toggleIcon.textContent = isDark ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('light');
  if (prefersDark) {
    applyTheme('dark');
  }
}

themeToggle.addEventListener('click', () => {
  const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(nextTheme);
});
