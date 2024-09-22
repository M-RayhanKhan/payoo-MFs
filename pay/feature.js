const addMoneyBtn = document.getElementById('add-money-btn');
const cashMoneyBtn = document.getElementById('cash-money-btn');

addMoneyBtn.addEventListener('click', function(){
   document.getElementById('addMoney-container').classList.remove('hidden')
   document.getElementById('cashMoney-container').classList.add('hidden')
})

cashMoneyBtn.addEventListener('click', function(){
   document.getElementById('cashMoney-container').classList.remove('hidden')
   document.getElementById('addMoney-container').classList.add('hidden')
})
