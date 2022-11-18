import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchanger';

// Business Logic

function exchange(currency1, currency2, amount) {
  CurrencyExchange.exchange(currency1, currency2, amount)
    .then(function(response) {
      if (response) {
        printElements(response, currency1, currency2, amount);
      } else {
        printError(response, currency1, currency2, amount);
      }
    });
}


// UI Logic