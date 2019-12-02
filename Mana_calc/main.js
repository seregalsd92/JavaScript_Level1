"use strict";

let calc = {
    settings,
    counter,
    manaCoeff: null,
    speedCoeff: null,


    init() {
        this.setEventHandlers();
    },

    playClickHandler(manaCoeff,speedCoeff) {
        this.counter.renderTable(speedCoeff, manaCoeff);
    },

    setEventHandlers() {
        document.querySelector('#score button').onclick =  function () {
            // let inputs = document.querySelectorAll('#score input[type="text"]');
            // let manaCoeff = inputs[0].value;
            // let speedCoeff = inputs[1].value;

            // let manaCoeff = document.querySelector('#score input[type="text"]').value;
            // let speedCoeff = document.querySelector('#score p select').value;

            // let params = calc.setfields();
            // calc.playClickHandler(params.manaCoeff,params.speedCoeff);
            calc.setfields();
            calc.playClickHandler(calc.manaCoeff,calc.speedCoeff)
        };
        document.querySelector('#score input').addEventListener('keydown', function(event) {
            if (event.code == 'Enter') {
                // let inputs = document.querySelectorAll('#score input[type="text"]');
                // let manaCoeff = inputs[0].value;
                // let speedCoeff = inputs[1].value;

                // let manaCoeff = document.querySelector('#score input[type="text"]').value;
                // let speedCoeff = document.querySelector('#score p select').value;
                // calc.playClickHandler(manaCoeff,speedCoeff);
                
                // let params = calc.setfields();
                // calc.playClickHandler(params.manaCoeff,params.speedCoeff);
                calc.setfields();
                calc.playClickHandler(calc.manaCoeff,calc.speedCoeff)
            }
        });
        document.querySelector('#score p select').addEventListener('keydown', function(event) {
            event.preventDefault();
            if (event.code == 'Enter') {
                // let inputs = document.querySelectorAll('#score input[type="text"]');
                // let manaCoeff = inputs[0].value;
                // let speedCoeff = inputs[1].value;

                // let manaCoeff = document.querySelector('#score input[type="text"]').value;
                // let speedCoeff = document.querySelector('#score p select').value;
                // calc.playClickHandler(manaCoeff,speedCoeff);

                // let params = calc.setfields();
                // calc.playClickHandler(params.manaCoeff,params.speedCoeff);
                calc.setfields();
                calc.playClickHandler(calc.manaCoeff,calc.speedCoeff)
            }
        });
    },

    setfields () {
        this.manaCoeff = document.querySelector('#score input').value;
        this.speedCoeff = document.querySelector('#score p select').value;
        // let manaCoeff = document.querySelector('#score input[type="text"]').value;
        // let speedCoeff = document.querySelector('#score p select').value;
        // let res = {
        //     manaCoeff: manaCoeff,
        //     speedCoeff: speedCoeff
        // }
        // return res;
    }
};

window.onload = function () {
    calc.init();
};
