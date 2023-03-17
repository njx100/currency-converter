const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const apiURL = "https://v6.exchangerate-api.com/v6/3013f9ff40e41b4e3ed23c4d/latest/";

async function updateRate() {
    const api = apiURL + currencyFirstEl.value;
    const data = await fetch(api).then((res) => res.json());
    const firstCurrency = currencyFirstEl.value;
    const secondCurrency = currencySecondEl.value;
    
    // console.log(firstCurrency);
    // console.log(secondCurrency)
    // console.log(data.conversion_rates[firstCurrency]);
    // console.log(data.conversion_rates[secondCurrency]);
    worthSecondEl.value = worthFirstEl.value * (data.conversion_rates[secondCurrency]);
    
}


currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("change", updateRate);
