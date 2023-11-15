document.addEventListener("DOMContentLoaded", function() {
	const apiKey = "5ab15174a77b4f34ab10fe3fb60c1885";
	const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=5ab15174a77b4f34ab10fe3fb60c1885`;

	const amountInput = document.getElementById("amount");
	const fromCurrencySelect = document.getElementById("from-currency-select");
	const toCurrencySelect = document.getElementById("to-currency-select");
	const convert = document.getElementById("convert");
	const resultParagraph = document.getElementById("result");

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const currencies = Object.keys(data.rates);

			currencies.forEach((currency) => {
				const option1 = document.createElement("option");
				const option2 = document.createElement("option");

				option1.value = currency;
				option1.text = currency;

				option2.value = currency;
				option2.text = currency;

				fromCurrencySelect.add(option1);
				toCurrencySelect.add(option2);

				convert.addEventListener("click", function() {
					const amount = parseFloat(amountInput.value);
					const fromCurrency = fromCurrencySelect.value;
					const toCurrency = toCurrencySelect.value;

					if (isNaN(amount)) {
						resultParagraph.textContent = "Please enter a valid amount.";
						return;
					}

					const conversionRate = data.rates[toCurrency] / data.rates[fromCurrency];
					const result = amount * conversionRate;

					resultParagraph.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
				});

			});
		})
		.catch((error) => console.error("Error fetching currency rates:", error));
});