const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const firstNameError = document.querySelector('.input:has(#firstName) > .error');
const lastNameError = document.querySelector('.input:has(#lastName) > .error');
const emailError = document.querySelector('.input:has(#email) > .error');
const phoneNumberError = document.querySelector('.input:has(#phoneNumber) > .error');
const passwordError = document.querySelector('.input:has(#password) > .error');
const passwordConfirmError = document.querySelector('.input:has(#passwordConfirm) > .error');




console.log(firstNameError);
console.log(lastNameError);
console.log(emailError);
console.log(phoneNumberError);
console.log(passwordError);
console.log(passwordConfirmError);


// DO BELOW ARROW FUNCTIONS NEED (event) ??

firstName.addEventListener('input', () => {
    if (firstName.value === '') {
        firstNameError.textContent = 'Please type your first name';
    } else {
        firstNameError.textContent = '';
    }
})

lastName.addEventListener('input', () => {
    if (lastName.value === '') {
        lastNameError.textContent = 'Please type your last name';
    } else {
        lastNameError.textContent = '';
    }
})

email.addEventListener('input', () => {
    if (email.value === '') {
        emailError.textContent = 'ex: name@email.com';
    } else {
        emailError.textContent = '';
    }
})

phoneNumber.addEventListener('input', () => {
    if (phoneNumber.value === '') {
        phoneNumberError.textContent = 'ex: 555-555-5555';
    } else {
        phoneNumberError.textContent = '';
    }
})


password.addEventListener('input', () => {
    if (password.validity.patternMismatch) {
        password.classList.add('invalid');

        const currentValue = password.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';

        if (currentValue.length < 9) {
            result += 'Must be 8+ characters';
        } else {
            result += '';
        }

        result += "<br />Missing: at least";

        if (regExpCap.test(currentValue)) {
            result += '';
        } else {
            result += ' 1 cap &';
            result += '';
        }

        if (regExpDig.test(currentValue)) {
            result += '';
        } else {
            result += ' 1 num';
            result += '';
        }

        if((result.slice(result.length - 1)) === '&') {
            console.log('has a num');
            result = result.slice(0, result.length -2);
            console.log(result);
        }

        if(password.value !== passwordConfirm.value) {
            passwordConfirm.classList.add('invalid');
        }

        passwordError.innerHTML = result;
    } else {
        passwordError.innerHTML = ''
        password.classList.remove('invalid');
    }
});

passwordConfirm.addEventListener('input', () => {
    if (passwordConfirm.value !== password.value) {
        passwordConfirmError.textContent = 'Passwords do not match.'
        passwordConfirm.classList.add('invalid');
    } else {
        passwordConfirmError.textContent = '';
        passwordConfirm.classList.remove('invalid');
    }
})