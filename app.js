function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;   
}

document.getElementById('key-pad').addEventListener('click', function(){
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if (number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const calcInput = document.getElementById('type-numbers');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const tyeddNumbers = document.getElementById('type-numbers').value;
    const successMassege = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == tyeddNumbers){
        successMassege.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        successMassege.style.display = 'none';
    }
}