document.getElementById('login-button')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const mobileNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        
        if (pinNumber === '1234' && mobileNumber === '018260') {
            window.location.href = '../home.html'
        }else{
            alert('Invalid your phone number  and pin')
        }
    })