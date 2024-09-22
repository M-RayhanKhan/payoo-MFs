document.getElementById('add-button').addEventListener('click', function(even){
    even.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin-number').value;

    if (inputPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const money = parseFloat(addMoney);
        let newBalance = balanceNumber + money;
        document.getElementById('account-balance').innerText = newBalance;
        
    }else{
        alert('Failed to add money! Please try to again.')
    }
})