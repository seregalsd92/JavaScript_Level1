"use strict";

let calc = {
    // settings,
    // counter,
    // manaCoeff = 1.19,

    init() {
        counter.renderTable("average", 1.19);
        // counter.insertRowsNumbers();
        // console.log(`Результат: ${res}`);
    }
};
let score = document.getElementById('score');
score.innerText = 1.19;

window.onload = function () {
    calc.init();
};
