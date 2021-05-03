    console.log("Starter code is working");

    let button = document.getElementById('calculate');

    button.addEventListener('click', function() {
        const billAmount = document.getElementById('bill-amount').value;
        const tipPercentage = document.getElementById('percentage-tip').value;
        const tipAmount = document.getElementById('tip-amount').value = (billAmount * tipPercentage) / 100;
        document.getElementById('total').value = parseFloat(billAmount) + parseFloat(tipAmount);
    })