let gameCounter = {
    gCount: 0,
    divGameCount: document.getElementById('game-count'),

    gameCount() {   
        this.divGameCount.innerHTML = 'Счёт игры:<br>';
        this.divGameCount.innerHTML += `${this.gCount}`;
        this.gCount++;
    }

};