import { $, $$ } from '../utils';

function init() {
  if (!$('[data-dropdown]')) return;

  addEventListeners();
}

function addEventListeners() {
  $$('[data-dropdown]').forEach((dropdown) => {
    dropdown
      .querySelector('[data-toggle-dropdown]')
      .addEventListener('click', toggleDropdown);
  });

  $$('[data-show-card]').forEach((btn, i) => {
    btn.addEventListener('click', () => toggleCards(btn, i));
  });
}

function toggleDropdown(e) {
  const dropdown = e.target.closest('[data-dropdown]');

  if (!dropdown.classList.contains('open')) {
    dropdown.classList.add('open');
  } else {
    dropdown.classList.remove('open');
  }
}

function toggleCards(e, i) {
  const dropdowns = $$('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove('open');
  });

  dropdowns[i].classList.add('open');

  $$('[data-show-card]').forEach((dropdown) => {
    dropdown.classList.remove('info-section__item--active');
  });

  e.classList.add('info-section__item--active');
}

export default { init };
