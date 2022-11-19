const error = document.getElementById('errorContainer');
const wellDone = document.getElementById('wellDone')
const btn = document.getElementById('subscribeBtn')
const inputId = document.getElementById('inputId')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    validateEmpty(inputId.value, inputId, error)
    validateEmail(inputId.value, inputId, error)
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
   if(regExp.test(valueInput) == true){
    hideError(divInput, divError);
   }else{
    showError(divInput, divError)
   }
}

function validateEmpty(valueInput, divInput, divError ){
    if (valueInput.length == 0){
        showError(divInput, divError);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError){
    divInput.style.border = '1px solid red'
    divError.innerHTML =  `<p data-aos="fade-right">It doesn't look like an email.  <img src="/images/error.png" alt="error"></p>`
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid green'
    divError.innerHTML = `<p data-aos="fade-left" style="color:#7bc62d">Check your email! <a target="_blank" href="https://mail.google.com/"><img src="/images/import.png" alt="check"></a><p>`
}





