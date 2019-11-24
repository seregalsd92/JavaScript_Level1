"use strict";
let counter = {

    manaComplite(speed, moves, cubes, manaCoeff) {
        let currentMana = moves*settings.movesCoeff*manaCoeff + cubes*settings.cubeCoeff*manaCoeff;
        if (currentMana >= speed) {
            return true;
        } else {
            return false;
        }
    },

    renderTable(speed, manaCoeff) {
        // let rowsCount = settings[speed] / settings.movesCoeff + 1;
        // let colsCount = settings[speed] / settings.cubeCoeff + 1;
        let rowsCount = this.rowsCount(speed);
        let colsCount = this.colsCount(speed);
        let table = document.getElementById('game');
        table.innerText = '';

        for (let row = rowsCount; row >= 0; row--) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                let td = document.createElement('td');
                td.classList.add('cell');
                if (this.manaComplite(speed, row, col, manaCoeff)) {
                    td.classList.add('yes');
                }
                tr.appendChild(td);
            }
        }
        this.insertRowsNumbers();
        this.insertColsNumber(speed);
    },

    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = [trs.length - 1 - i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    insertColsNumber(speed) {
        let tr = document.createElement('tr');
        let colsCount = this.colsCount(speed);
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < colsCount; i++) {
            tr.innerHTML += `<td>${[i]}</td>`;
        }
        let tbody = document.querySelector('table');
        tbody.insertAdjacentElement("beforeend", tr);
    },

    rowsCount(speed) {
        return Math.ceil(speed / settings.movesCoeff);
    },

    colsCount(speed) {
        return Math.ceil(speed / settings.cubeCoeff + 1);
    },

};