const formElement = document.querySelector('.stay_up-to-data_form');
const inputElement = formElement.querySelector('.stay_up-to-data_form input');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const currentEmail = inputElement.value;

  if (currentEmail && validEmail(currentEmail)) {
    inputElement.value = '';
    formElement.classList.remove('error');
    return;
  }

  formElement.classList.add('error');
  return;
});

const validEmail = (email) => {
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return emailRegex.test(email);
};
