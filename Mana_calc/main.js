"use strict";

let calc = {
    // settings,
    counter,
    manaCoeff: 1.19,

    init() {
        this.counter.renderTable("average", this.manaCoeff);
        // counter.insertRowsNumbers();
        // console.log(`Результат: ${res}`);
    }
};
let score = document.getElementById('score');
score.innerText = calc.manaCoeff;

window.onload = function () {
    calc.init();
};
