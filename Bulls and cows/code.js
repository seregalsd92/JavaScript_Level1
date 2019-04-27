function getRandomNumberAsArray() {
    let generated = String(Math.random() * 100000000000000000);
    let result = [];
    for(let value of generated) {
        if(!result.includes(value)) {
            result.push(value);
        }
        if(result.length === 4) {
            return result;
        }
    }
}

function startGame() {
    let riddle = getRandomNumberAsArray();
    while(true) {
        let answer = prompt("Угадайте 4-х значное число").split("");
        let bulls = getBullsCount(riddle, answer);
        let cows = getCowsCount(riddle, answer) - bulls;
        console.log(
            `Ваш ответ: ${answer},     быков: ${bulls}, коров: ${cows}\n`
        );

        if (riddle.toString() === answer.toString()) {
            console.log("Вы победили");
            break;
        }
    }
    console.log("Загадка: " + riddle);
}

function getBullsCount(riddle, answer) {
    let count = 0;
    for(let i = 0; i < riddle.length; i++) {
        if(riddle[i] === answer[i]) {
            count++;
        }
    }
    return count;
}

function getCowsCount(riddle, answer) {
    let count = 0;
    for (let value of riddle)  {
        if(answer.includes(value)) {
            count++
        }
    }
    return count;
}

startGame();

