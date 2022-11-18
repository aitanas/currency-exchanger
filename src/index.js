import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchanger';

// Business Logic

function exchange(currency1, currency2, amount) {
  CurrencyExchange.exchange(currency1, currency2, amount)
    .then(function(response) {
      if (response) {
        printConversion(response, currency1, currency2, amount);
      } else {
        printError(response, currency1, currency2, amount);
      }
    });
}


// UI Logic

function printConversion(response, currency1, currency2, amount) {
  document.querySelector('#response').innerText = `${amount}${currency1} exchanged to ${currency2} comes out to ${response.conversion_result}${currency2}.`
}

function printError(error, currency1, currency2, amount) {
  document.querySelector('#response').innerText = `There was an error accessing the currency exchange data for ${currency1} and/or ${currency2}:
  ${response[`error-type`]}.`
}

function handleFormSubmission(event) {
  event.preventDefault();

}