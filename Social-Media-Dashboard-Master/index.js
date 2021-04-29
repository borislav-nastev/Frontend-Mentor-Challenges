const darkModeCheckbox = document.querySelector(
  '.custom_checkbox input[type=checkbox]'
);

darkModeCheckbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark_theme');
  } else {
    document.body.classList.remove('dark_theme');
  }
});
