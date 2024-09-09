const cardNameInput = document.getElementById('cardholder-name');
const cardNumberInput = document.getElementById('card-number');
const mmInput = document.getElementById('mm');
const yyInput = document.getElementById('yy');
const cvcInput = document.getElementById('cvc');

const cardNameDisplay = document.querySelector('.card-name');
const cardNumberDisplay = document.querySelector('.card-number');
const cardExpDisplay = document.querySelector('.card-exp');
const cardCvcDisplay = document.querySelector('.card-cvc');

// Cardholder name güncelleme
cardNameInput.addEventListener('input', (e) => {
  cardNameDisplay.textContent = e.target.value || 'Jane Appleseed';
});

// Card number güncelleme
cardNumberInput.addEventListener('input', (e) => {
  let formattedNumber = e.target.value.replace(/(.{4})/g, '$1 ').trim();  // 4'erli bloklar halinde boşluk koyar
  cardNumberDisplay.textContent = formattedNumber || '0000 0000 0000 0000';
});

// Exp. Date güncelleme
mmInput.addEventListener('input', () => {
  cardExpDisplay.textContent = `${mmInput.value || '00'}/${yyInput.value || '00'}`;
});

yyInput.addEventListener('input', () => {
  cardExpDisplay.textContent = `${mmInput.value || '00'}/${yyInput.value || '00'}`;
});

// CVC güncelleme
cvcInput.addEventListener('input', (e) => {
  cardCvcDisplay.textContent = e.target.value || '123';
});
