(() => {

function displayError(elem, message)
{
  const smallElem = elem.parentElement.querySelector('small');
  elem.classList.add('invalid');
  smallElem.innerText = message;
  form.classList.add('invalid');
}

function displaySuccess(){
  document.body.innerHTML = '';
  const pElem = document.createElement('p');
  pElem.innerText = 'You have been logged in successfully';
  pElem.classList.add('success');
  document.body.appendChild(pElem);
}

function validateLength(elem,min,max)
{
 const value = elem.value;
 if(value.length < min || value.length > max)
 {
   const elemName = elem.getAttribute('name');
   displayError(elem, `${elemName} length must be between ${min} and ${max}`);
 }
}

function resetState(elem) {
  const smallElem = elem.parentElement.querySelector('small');
  elem.classList.remove('invalid');
  smallElem.innerText = '';
  form.classList.remove('invalid');
}

function validateEmail(emailElem){
  const regex = /\S+@\S+\.+\S/;
  if(!regex.test(emailElem.value))
  {
    displayError(emailElem,'Invalid email');
  }
}

  function validateForm(event)
  {
    event.preventDefault();
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');
    resetState(emailElem);
    resetState(passwordElem);
    validateLength(emailElem,10,20);
    validateLength(passwordElem,8,20);
    validateEmail(emailElem);
    const isValidForm = !form.classList.contains('invalid');
    if(isValidForm)
    {
      displaySuccess();
    }

  }
function run() {
  const formElem = document.querySelector('form');
  form.addEventListener('submit',validateForm);
}
run();
})();
