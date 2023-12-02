//do not forget to enter document.ready function
//also jquery library should be included


//adding radio buttons for the courses
let h2 = document.querySelector('h2');
for (let i = 0; i < countries.length; i++) {
  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.name = 'checked';
  check.id = countries[i];
  check.value = countries[i];
  let lable = document.createElement('label');
  lable.setAttribute('for', countries[i]);
  lable.innerHTML = countries[i];
  h2.after(lable);
  lable.appendChild(check);

}

//We are going to write a listener for the checked buttons
//getting the name and one of the radio buttons
//will create a message

let form = document.querySelector('#registration');
let subBtn = document.querySelector('#submit');
let parMsg = document.createElement('p');
let elements = form.elements;

subBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (validation()) {
    alert('This is a demp. No form is submitted');
  }
  let user = elements.username.value;
  let checkboxes = document.getElementsByName('checked');
  let ok = false;
  let code;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      ok = true;
      code = checkboxes[i].value;
    }
  }
  let msg = `Welcome ${user}!The country code you selected is  ${code} `;
  parMsg.textContent = msg;
  form.appendChild(parMsg);
});

//form validation

let username = document.getElementById('username');
let pass = document.getElementById('password');
let repass = document.getElementById('checkpsd');

const validation = function () {
  if (fname.value == '') {
    alert("Please enter your username");
    fname.focus();
    return false;

  }

  if (pass.value == '' || pass.value.length <= 12) {
    alert("Please enter your password and it should be more than 12 characters");
    pass.focus();
    return false;
  }

  if (repass.value == '' || pass.value != repass.value) {
    alert("Please enter your password and it should be more than 12 characters");
    pass.focus();
    return false;
  }

  let checkboxes = document.getElementsByName('checked');
  let ok = false;
  let code;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      ok = true;
      code = checkboxes[i].value;
    }
  }
  if (!ok) {
    alert("Please check on box");
    return false;
  }


  return true;
}

//we need our button to be disabled until the form is validated
//validation will happen witth any input

subBtn.classList.remove('enabled');
subBtn.ariaDisabled = true;
subBtn.disabled = true;
subBtn.classList.add('disabled');

let inputs = document.querySelectorAll('#registration input');

for (let i = 0; i < inputs.length; i++) {
  let checkValid = function () {
    if (!validation()) {
      subBtn.disabled = true;
      subBtn.classList.add('disabled');
    }
    else {
      subBtn.disabled = false;
      subBtn.classList.remove('disabled');
      alert('Demo Only. No form is submitted');
    }
  }
  inputs[i].addEventListener('input', checkValid
  );
}