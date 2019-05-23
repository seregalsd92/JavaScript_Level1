"use strict";

function gameCounter() {
    let gCount = 0;
    let divGameCount = document.getElementById('game-count');

    function setDefault() {
        gCount = 0;
    }
    
    function gameCount() {   
        divGameCount.innerHTML = 'Счёт игры:<br>';
        divGameCount.innerHTML += `${gCount}`;
        gCount++;
    }

    return {
        setDefault: setDefault,
        gameCount: gameCount
    }
}