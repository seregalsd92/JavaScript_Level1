"use strict";
let counter = {

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    },
    
    randGeneration() {
        let count = this.getRandomArbitrary(0,100);
        let res = (Math.floor(count * 10) / 10);
        return res;
    },

    renderTable(num) {
        let rowsCount = Math.floor(num/10);
        let colsCount = 10;
        let table = document.getElementById('game');
        table.innerText = '';

        for (let row = rowsCount; row >= 0; row--) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            if (row == 0 ) {
                colsCount = (num % 10) - 1;
            }
                for (let col = 0; col <= colsCount; col++) {
                    let td = document.createElement('td');
                    td.classList.add('cell');
                    let currentNum = this.randGeneration();
                    td.innerText = currentNum;
                    switch (true) {
                        case (currentNum >= 0 && currentNum < 0.5) :
                            td.classList.add('krampus');
                            let totalSummKramp = +document.querySelector('#score .krampus').innerText;
                            if (totalSummKramp != "") {
                                totalSummKramp += 1;
                            } else {
                                totalSummKramp = 1;
                            }
                            document.querySelector('#score .krampus').innerText = totalSummKramp;
                            break;
                        case (currentNum >= 0.5 && currentNum < 1) :
                            td.classList.add('santa');
                            let totalSummSanta = +document.querySelector('#score .santa').innerText;
                            if (totalSummSanta != "") {
                                totalSummSanta += 1;
                            } else {
                                totalSummSanta = 1;
                            }
                            document.querySelector('#score .santa').innerText = totalSummSanta;
                            break;
                        case (currentNum >= 1 && currentNum < 1.5) :
                            td.classList.add('mother');
                            let totalSummMother = +document.querySelector('#score .mother').innerText;
                            if (totalSummMother != "") {
                                totalSummMother += 1;
                            } else {
                                totalSummMother = 1;
                            }
                            document.querySelector('#score .mother').innerText = totalSummMother;
                            break;
                        case (currentNum >= 1.5 && currentNum < 2.5) :
                            td.classList.add('regular');
                            let totalSummRegular = +document.querySelector('#score .regular').innerText;
                            if (totalSummRegular != "") {
                                totalSummRegular += 1;
                            } else {
                                totalSummRegular = 1;
                            }
                            document.querySelector('#score .regular').innerText = totalSummRegular;
                            break;
                    }
                    let currentNumBonus = this.randGeneration();
                    if (currentNumBonus < 1.3) {
                        td.classList.add('bonus');
                        let totalSummBonus = +document.querySelector('#score .bonus').innerText;
                            if (totalSummBonus != "") {
                                totalSummBonus += 1;
                            } else {
                                totalSummBonus = 1;
                            }
                            document.querySelector('#score .bonus').innerText = totalSummBonus;
                    }
                    tr.appendChild(td);
                }
            
        }
        
    },
};