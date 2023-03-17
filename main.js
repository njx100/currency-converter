const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const apiURL = "https://v6.exchangerate-api.com/v6/3013f9ff40e41b4e3ed23c4d/latest/";

async function updateRate() { 
    try {
        const api = apiURL + currencyFirstEl.value;
        const data = await fetch(api).then((res) => res.json());
        const firstCurrency = currencyFirstEl.value;
        const secondCurrency = currencySecondEl.value;
        worthSecondEl.value = (worthFirstEl.value * (data.conversion_rates[secondCurrency])).toFixed(4);
        exchangeRateEl.innerText = `${worthFirstEl.value} ${firstCurrency} = ${worthSecondEl.value} ${secondCurrency}`; 
    } catch (error) {
        exchangeRateEl.innerText = "An error happened, try again later!"
    }
}

updateRate();
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("change", updateRate);
