const expensesInsertBtn =  document.getElementById('expenses-insert-btn');
const expensesField = document.getElementById('expenses-field')
const amountField = document.getElementById('amount-field');

expensesInsertBtn.addEventListener('click', function(){
    const expenses = expensesField.value;
    const amount = Number(amountField.value);
    console.log(expenses, amount);
    const div = document.getElementById('main-container');
    // const expensesP = document.createElement('p');
    // const amountP = document.createElement('p');
    const expensesSpan = document.getElementById('expensesSpan');
    const row = `
    <div class="flex justify-between border border-purple-700 w-[400px] font-bold" "data-amount${amount}">
    <p>${expenses}</p>
    <p>${amount}</p>
    </div>
    `
    let expensesAmount = Number(expensesSpan.innerText);
    expensesAmount += amount;
    expensesSpan.innerText = expensesAmount;
    div.innerHTML += row;
})