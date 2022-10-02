import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formDataStorage = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('input', throttle(onFormInput, 500));
populateForm();
refs.form.addEventListener('submit', onFormSubmit);
function onFormInput(evt) {
  formDataStorage[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataStorage));
}

function populateForm() {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData.message) {
      refs.textarea.value = savedData.message;
    }
    if (savedData.email) {
      refs.email.value = savedData.email;
    }
  } catch {}
}

function onFormSubmit(evt) {
  evt.preventDefault();

  formData.email = evt.target.elements.email.value;
  formData.message = evt.target.elements.message.value;
  console.log(formData); //это не убирать
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
