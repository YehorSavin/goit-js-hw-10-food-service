import './styles.css';
import './JS/menu';

const switcher = document.querySelector('#theme-switch-toggle');

switcher.addEventListener('change', changeColor);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeColor(event) {
  if (event.target.checked) {
    currentTheme(Theme.LIGHT, Theme.DARK);
    updateFonecolor('Theme', Theme.DARK);
  } else {
    currentTheme(Theme.DARK, Theme.LIGHT);
    updateFonecolor('Theme', Theme.LIGHT);
  }
}

function currentTheme(firstTheme, secondTheme) {
  document.body.classList.remove(firstTheme);
  document.body.classList.add(secondTheme);
}

function updateFonecolor(key, value) {
  localStorage.setItem(key, value);
}

function startTheme() {
  const theme = localStorage.getItem('Theme') ?? Theme.LIGHT;
  document.body.classList.add(theme);
  switcher.checked = theme === Theme.DARK;
}

startTheme();