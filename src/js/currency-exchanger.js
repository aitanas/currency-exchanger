export default class CurrencyExchange {
  static exchange(currency1, currency2, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}/${amount}`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.result}: ${response['error-type']}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(error => error);
  }
}