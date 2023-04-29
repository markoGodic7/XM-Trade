const url = 'data.json';
const symbols = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];

fetch(url)
  .then(response => response.json())
  .then(data => {
    const filteredData = data.data.filter(item => symbols.includes(item.symbol));
    const cardContainer = document.querySelector('.card-container');

    filteredData.forEach(item => {
      const card = document.querySelector(`#${item.symbol.toLowerCase()}`);
      const price = card.querySelector('.card__price');
      const change = card.querySelector('.card__change');

      price.textContent = `$${item.price_usd}`;

      if (item.percent_change_24h < 0) {
        change.innerHTML = `<i class="fa fa-solid fa-circle-chevron-down"></i> ${item.percent_change_24h}%`;
        change.classList.add('card__change--negative');
        change.classList.remove('card__change--positive');
      } else {
        change.innerHTML = `<i class="fa fa-solid fa-circle-chevron-up"></i> ${item.percent_change_24h}%`;
        change.classList.add('card__change--positive');
        change.classList.remove('card__change--negative');
      }
    });
  });


  const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const lengthReq = document.getElementById('lengthReq');
const numReq = document.getElementById('numReq');
const lowerReq = document.getElementById('lowerReq');
const upperReq = document.getElementById('upperReq');
const specialReq = document.getElementById('specialReq');
const submitButton = document.getElementById('submitButton');
const successMessage = document.querySelector('.success-message');

function validateEmail() {
  const email = emailInput.value;
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    emailError.innerHTML = '<i class="fa-solid fa-circle-dot"></i> Please enter a valid email address';
    emailError.style.color = '#D51820';
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
}

function validatePassword() {
  const password = passwordInput.value;
  let errors = [];
  if (password.length < 8 || password.length > 15) {
    errors.push(lengthReq);
  } else {
    lengthReq.style.color = 'green';
  }
  if (!password.match(/[a-z]/)) {
    errors.push(lowerReq);
  } else {
    lowerReq.style.color = 'green';
  }
  if (!password.match(/[A-Z]/)) {
    errors.push(upperReq);
  } else {
    upperReq.style.color = 'green';
  }
  if (!password.match(/\d/)) {
    errors.push(numReq);
  } else {
    numReq.style.color = 'green';
  }
  if (!password.match(/[#\[\]()@$&*!?|,.^\/\+_-]/)) {
    errors.push(specialReq);
  } else {
    specialReq.style.color = 'green';
  }
  // Set error messages to red and clear other requirements color
  [lengthReq, numReq, lowerReq, upperReq, specialReq].forEach(req => {
    if (errors.includes(req)) {
      req.style.color = 'red';
    } else {
      req.style.color = 'green';
    }
  });
  if (errors.length > 0) {
    passwordInput.setCustomValidity(errors.join(', '));
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'grey';
  } else {
    passwordInput.setCustomValidity('');
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '';
  }
}

function displaySuccessMessage() {
  successMessage.style.display = 'block';
  setTimeout(function() {
    successMessage.style.display = 'none';
    location.reload();
  }, 2000);
}

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  displaySuccessMessage();
});

emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('input', validatePassword);



