'use strict';

let form = {
    loginInput: document.querySelector('div input[id="login"]'),
    passwordInput: document.querySelector('div input[id="pass"]'),
    password2Input: document.querySelector('div input[id="r-pass"]'),
    

    run() {
        document.querySelector('form button').addEventListener('click', (event) => {
            let loginCorrect = this.loginValidation();
            let passwordCorrect = this.passValidation();
            let passRepeatCorrect =  this.passRepeatSuccess();
            if (loginCorrect && passwordCorrect && passRepeatCorrect) {
                alert('Вы успешно зарегистрировались');
            } else {
                event.preventDefault();
            }
        });
    },

    loginValidation() {
        let loginHint = document.getElementById('login-hint');
        let res = this.stringLengthValidate(this.loginInput.value,1,50);
        if (!res) {
            this.loginInput.dataset.error = '';
            loginHint.innerHTML = 'Неверно введен логин. Логин должен содержать от 1 до 50 символов.';
        }
        else if (loginHint.hasChildNodes()) {
            this.loginInput.removeAttribute('data-error');
            // loginHint.innerHTML = '';
            loginHint.firstChild.remove();
        }
        return res;
    },

    passValidation() {
        let passwordHint = document.getElementById('pass-hint');
        let res = this.stringLengthValidate(this.passwordInput.value,5,50);
        if (!res) {
            this.passwordInput.dataset.error = '';
            passwordHint.innerHTML = 'Неверно введен пароль. Пароль должен содержать от 5 до 50 символов.';
        }
        else if (passwordHint.hasChildNodes()) {
            this.passwordInput.removeAttribute('data-error');
            // passwordHint.innerHTML = '';
            passwordHint.firstChild.remove();
        }
        return res;
    },

    passRepeatSuccess () {
        let password2Hint = document.getElementById('r-pass-hint');
        let res = this.passwordInput.value === this.password2Input.value;
        if (!res) {
            this.password2Input.dataset.error = '';
            password2Hint.innerHTML = 'Введенный повторно пароль не совпадает с предыдущим.'
        }
        else if (password2Hint.hasChildNodes()) {
            this.password2Input.removeAttribute('data-error');
            // password2Hint.innerHTML = '';
            password2Hint.firstChild.remove();
        }
        return res;
    },

    stringLengthValidate (str, minLength, maxLength) {
        if (str.length < minLength || str.length > maxLength) {return false;}
        else {return true;}
    }
    
};

form.run();