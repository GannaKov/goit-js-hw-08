import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = { form: document.querySelector('.feedback-form') };
refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);
function onFormInput(evt) {
  //   console.log(evt.target.name);
  //   console.log(evt.target.value);
  //   formData[evt.target.name] = [evt.target.value];
  //   console.log(formData);
}
// console.log('a', formData);

function onFormSubmit(evt) {
  evt.preventDefault();
  //   console.log(formData);

  //   console.log(evt.target.elements.message.value);
  formData.email = evt.target.elements.email.value;
  formData.message = evt.target.elements.message.value;
  console.log(formData);
  evt.currentTarget.reset();
}
