"use strict";

function renderer () {
    let cells = {};
    function renderMap(rowsCount, colsCount) {
        let table = document.getElementById('game');
        table.innerText = '';

        for (let row = 0; row < rowsCount; row++) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                let td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);
                cells[`x${col}_y${row}`] = td;
            }
        }
    }

    function render(snakePointArray, foodPoint) {
        for (let key of Object.getOwnPropertyNames(cells)) {
            cells[key].className = 'cell';
        }

        snakePointArray.forEach((point, idx) => {
            cells[`x${point.x}_y${point.y}`].classList.add(idx === 0 ? 'snakeHead' : 'snakeBody');
        });

        cells[`x${foodPoint.x}_y${foodPoint.y}`].classList.add('food');
    }

    return {
        renderMap: renderMap,
        render: render
    }
};