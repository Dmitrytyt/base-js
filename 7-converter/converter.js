function currencyConvert(cash, cashCurrency, currencyTarget) {
    const RATE_USD_TO_RUB = 93.56;
    const RATE_RUB_TO_USD = 1 / RATE_USD_TO_RUB ;

    if (cashCurrency.toUpperCase() === 'RUB' && currencyTarget.toUpperCase() === 'USD') {
        return cash / RATE_USD_TO_RUB;
    }

    if (cashCurrency.toUpperCase() === 'USD' && currencyTarget.toUpperCase() === 'RUB') {
        return cash / RATE_RUB_TO_USD;
    }

    return null;
}

console.log(currencyConvert(1000, 'USD', 'RUB'));