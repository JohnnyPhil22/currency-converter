function appendToResult(value) {
	document.getElementById('result').value += value;
}

function clearResult() {
	document.getElementById('result').value = '';
}

function calculateResult() {
	try {
		const result = eval(document.getElementById('result').value);
		document.getElementById('result').value = result;
	} catch (error) {
		document.getElementById('result').value = 'Error';
	}
}

function calculateInterest() {
	const principal = parseFloat(document.getElementById('principal').value);
	const time = parseFloat(document.getElementById('time').value);
	const rate = parseFloat(document.getElementById('rate').value);
	const intType = document.getElementById('intType').value;

	if (isNaN(principal) || isNaN(time) || isNaN(rate)) {
		document.getElementById('interestResult').textContent = 'Please enter valid numeric values.';
		return;
	}

	let interest = 0;

	if (intType === 'simple') {
		interest = (principal * time * rate) / 100;
	} else if (intType === 'compound') {
		interest = principal * Math.pow(1 + rate / 100, time) - principal;
	}

	const totalAmount = principal + interest;

	document.getElementById('interestResult').textContent = `Interest: ${interest.toFixed(2)}, Total Amount: ${totalAmount.toFixed(2)}`;
}