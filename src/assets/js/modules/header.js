import { $, $$ } from './../utils';

function init() {
  if (!$('[data-toggle-menu]')) return;

  addEventListeners();
}

function addEventListeners() {
  $$('[data-toggle-menu]').forEach((btn) => {
    btn.addEventListener('click', toggleMenu);
  });
}

function toggleMenu() {
  $('[data-menu]').classList.toggle('header__menu--open');
}

export default { init };
