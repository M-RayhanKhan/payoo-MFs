document.getElementById('cash-out-btn').addEventListener('click', function (even) {
    even.preventDefault();

    const cashOut = document.getElementById('input-cash-out-money').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    if (pinNumber == '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;

    } else {
        alert('Failed to cash out. Please try to again number')
    }
})