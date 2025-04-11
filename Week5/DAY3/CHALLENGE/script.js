const apiKey = '5128e050fd7b2acfdfc6cd66'; 
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const switchBtn = document.getElementById('switch-btn');
const resultDisplay = document.getElementById('result');

// Fetch the supported currencies
async function fetchCurrencies() {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD?apikey=${apiKey}`);
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        const optionTo = document.createElement('option');
        optionFrom.value = currency;
        optionTo.value = currency;
        optionFrom.textContent = currency;
        optionTo.textContent = currency;
        fromCurrencySelect.appendChild(optionFrom);
        toCurrencySelect.appendChild(optionTo);
    });
}

// Fetch exchange rate and convert currency
async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apikey=${apiKey}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(4);

    resultDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

// Switch currencies
function switchCurrencies() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
    convertCurrency(); // Recalculate the conversion after switching
}

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);

// Initial fetch
fetchCurrencies();