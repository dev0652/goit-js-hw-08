import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
  button: document.querySelector('button[type="submit"]'),
};

// Function that checks if all required fields have been filled
function checkIfAllFieldsWereFilled() {
  if (refs.input.value !== '' && refs.textarea.value !== '') {
    refs.button.disabled = false;
    return;
  }
  refs.button.disabled = true;
}

const savedInput = localStorage.getItem('feedback-form-state');
const parsedSavedInput = JSON.parse(savedInput);

// Check if there is saved data in 'localStorage'
if (savedInput) {
  // If yes, pre-populate form fields with saved data
  refs.input.value = parsedSavedInput.email;
  refs.textarea.value = parsedSavedInput.message;
}

// Check if all required fields have been filled
checkIfAllFieldsWereFilled();

// Create a temp object for storing form data
let tempInput = parsedSavedInput || {};

// Listen to user input in form fields
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  tempInput[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(tempInput));
  checkIfAllFieldsWereFilled();
}

// Submitting the form
refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  console.log('User submitted the following data:', parsedSavedInput);
  localStorage.removeItem('feedback-form-state');
  // Reset fom fields
  event.currentTarget.reset();
  // Clear temp object
  tempInput = {};
}
