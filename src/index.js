import dishes from './menu.json';
import menuItemTemplate from './list-item.hbs';
import './styles.css';

const refs = {
  menuList: document.querySelector('.js-menu'),
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

function buildItem(dishes) {
  const markup = dishes.map(dish => menuItemTemplate(dish)).join('');
  refs.menuList.insertAdjacentHTML('beforeend', markup);
}

buildItem(dishes);

// THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);

function getThemeFromLocalStorage() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    setLightTheme();
  } else if (localStorage.getItem('theme') === Theme.DARK) {
    setDarkTheme();
    refs.input.checked = true;
  }
}

refs.input.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (!e.target.checked) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

function setDarkTheme() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);

  localStorage.setItem('theme', Theme.DARK);
}

function setLightTheme() {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);

  localStorage.setItem('theme', Theme.LIGHT);
}
