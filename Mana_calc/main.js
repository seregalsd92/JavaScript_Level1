"use strict";

let calc = {
    settings,
    counter,

    init() {
        this.setEventHandlers();
    },

    playClickHandler(manaCoeff) {
        this.counter.renderTable(this.settings.veryFast, manaCoeff);
    },

    setEventHandlers() {
        document.getElementById('button').onclick =  function () {
            let manaCoeff = document.querySelector('#score input[type="text"]').value;
            calc.playClickHandler(manaCoeff);
        };
    },
};
// let score = document.getElementById('score');
// score.innerText = calc.manaCoeff;

window.onload = function () {
    calc.init();
};
