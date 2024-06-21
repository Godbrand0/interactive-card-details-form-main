const MM = document.querySelector("#MM");
const YY = document.querySelector("#YY");
const CVC = document.querySelector("#CVC");
const NAME = document.querySelector("#NAME");
const number = document.querySelector("#number");
const cardName = document.querySelector("#cardholder-name");
const cardNumber = document.querySelector("#card-number");
const expMonth = document.querySelector("#exp-month");
const expYear = document.querySelector("#exp-year");

const numberErr = document.querySelector("#number-err");
const yearErr = document.querySelector("#year-err");
const cvcErr = document.querySelector("#cvc-err");
const button = document.querySelector("#button");

function changeName() {
  if (cardName.value != "") {
    NAME.innerHTML = cardName.value;
    cardName.classList.remove("outline-red-800");
    cardName.classList.add("outline-violet-800");
  } else {
    cardName.classList.add("outline-red-800");
    cardName.classList.remove("outline-violet-800");
  }
}

const alphabet = new RegExp("[a-zA-Z]");

function formatCardNumber(value) {
  // Remove any non-digit characters
  const cleanedValue = value.replace(/\D/g, "");

  // Add a space every 4 digits
  const formattedValue = cleanedValue.replace(/(.{4})/g, "$1 ");

  return formattedValue.trim();
}
function changeNumber() {
  const formattedNumber = formatCardNumber(cardNumber.value);
  cardNumber.value = formattedNumber;

  if (
    formattedNumber.replace(/\s/g, "") !== "" &&
    !alphabet.test(cardNumber.value)
  ) {
    number.innerHTML = cardNumber.value;
    cardNumber.classList.remove("outline-red-800");
    cardNumber.classList.add("outline-violet-800");
    numberErr.classList.add("hidden");
    numberErr.classList.remove("block");
  } else {
    cardNumber.classList.add("outline-red-800");
    cardNumber.classList.remove("outline-violet-800");
    numberErr.classList.remove("hidden");
    numberErr.classList.add("block");
  }
}

function changeMonth() {
  if (expMonth.value != "") {
    MM.innerHTML = expMonth.value;
    expMonth.classList.remove("outline-red-800");
    expMonth.classList.add("outline-violet-800");
    yearErr.classList.add("hidden");
    yearErr.classList.remove("block");
  } else {
    expMonth.classList.add("outline-red-800");
    expMonth.classList.remove("outline-violet-800");
    yearErr.classList.remove("hidden");
    yearErr.classList.add("block");
  }
}

function changeYear() {
  if (expYear.value != "") {
    YY.innerHTML = expYear.value;
    expYear.classList.remove("outline-red-800");
    expYear.classList.add("outline-violet-800");
  } else {
    expYear.classList.add("outline-red-800");
    expYear.classList.remove("outline-violet-800");
  }
}

function changeCvc() {
  if (cvc.value != "") {
    CVC.innerHTML = cvc.value;
    cvc.classList.remove("outline-red-800");
    cvc.classList.add("outline-violet-800");
    cvcErr.classList.add("hidden");
    cvcErr.classList.remove("block");
  } else {
    cvc.classList.add("outline-red-800");
    cvc.classList.remove("outline-violet-800");
    cvcErr.classList.remove("hidden");
    cvcErr.classList.add("block");
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  changeCvc();
  changeYear();
  changeMonth();
  changeName();
  changeNumber();
});
