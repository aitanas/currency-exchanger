export default class CurrencyExchange {
  static exchange(currency1, currency2, amount) {
    return fetch(``)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(error => error);
  }
}