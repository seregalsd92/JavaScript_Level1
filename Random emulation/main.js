"use strict";

let calc = {
    counter,
    num: null,
    

    init() {
        this.setEventHandlers();
    },

    reset() {
        document.querySelector('#score .krampus').innerText = "";
        document.querySelector('#score .santa').innerText = "";
        document.querySelector('#score .mother').innerText = "";
        document.querySelector('#score .regular').innerText = "";
        document.querySelector('#score .bonus').innerText = "";
    },

    playClickHandler(num) {
        this.counter.renderTable(num);
    },

    setEventHandlers() {
        document.querySelector('#score button').onclick =  function () {
            calc.setfields();
            calc.playClickHandler(calc.num)
        };
        document.querySelector('#score input').addEventListener('keydown', function(event) {
            if (event.code == 'Enter') {
                calc.setfields();
                calc.playClickHandler(calc.num)
            }
        });
        document.getElementById('resetButton').addEventListener('click', () => this.reset());
    },

    setfields () {
        this.num = document.querySelector('#score input').value;
    }
};

window.onload = function () {
    calc.init();
};
