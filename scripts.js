const convertButton = document.querySelector(".convert-button"); //puxando o botão
const currencySelect = document.querySelector(".currency-select"); //puxando o select
const currencySelectConverted = document.querySelector(
  ".currency-converted-select"
);
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value; //pegando o valor do input
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor real

  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const bitToday = 600.508;
  const realToday = 5.67;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday); // pegando o valor ja convertido e formata ele parar USD
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday); // pegando o valor ja convertido e formata ele parar EUR
  }

  if (currencySelect.value == "bit") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitToday); // pegando o valor ja convertido e formata ele parar BTC
  }

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / realToday); // pegando o valor ja convertido e formata ele parar BRL
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue); // pegando o valor á ser convertido e formatando ele para BRL
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/dolar1.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "EURO";
    currencyImg.src = "./assets/euro3.png";
  }

  if (currencySelect.value == "bit") {
    currencyName.innerHTML = "BitCoin";
    currencyImg.src = "./assets/bitcoin1.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  }

  convertValues();
}

function changeConverted() {
  const currencyConvertedName = document.getElementById("currency-converted");
  const currencyConvertedImg = document.querySelector(
    ".currency-converted-img"
  );
  if (currencySelectConverted.value == "dolar") {
    currencyConvertedName.innerHTML = "Dólar americano";
    currencyConvertedImg.src = "./assets/dolar1.png";
  }

  if (currencySelectConverted.value == "euro") {
    currencyConvertedName.innerHTML = "EURO";
    currencyConvertedImg.src = "./assets/euro3.png";
  }

  if (currencySelectConverted.value == "bit") {
    currencyConvertedName.innerHTML = "BitCoin";
    currencyConvertedImg.src = "./assets/bitcoin1.png";
  }

  if (currencySelectConverted.value == "real") {
    currencyConvertedName.innerHTML = "Real";
    currencyConvertedImg.src = "./assets/real.png";
  }
}

currencySelectConverted.addEventListener("change", changeConverted);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
