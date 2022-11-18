import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchanger';

// Business Logic

function exchange(currency, amount) {
  CurrencyExchange.exchange(currency, amount)
    .then(function(response) {
      if (response) {
        printConversion(response, currency, amount);
        console.log(response);
      } else {
        printError(response, currency);
      }
    });
}


// UI Logic

function printConversion(response, currency, amount) {
  document.querySelector('#response').innerText = `$${amount} USD exchanged to ${currency} comes out to ${response['conversion_result']} ${currency}.
  Exchange rate: ${response.conversion_rate}`;
}

function printError(error, currency) {
  document.querySelector('#response').innerText = `There was an error accessing the currency exchange data for ${currency}:
  ${error}.`;
}

function handleSubmission(event) {
  event.preventDefault();
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;
  exchange(currency, amount);
}

window.addEventListener("load", () => {
  document.getElementById("exchange").addEventListener("submit", handleSubmission);
});