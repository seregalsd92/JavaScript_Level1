let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },

    generateBoard() {
        let board = '';
        for(let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                if (x % 2 === 0 && y % 2 === 0) {
                    board += '<td class="black"></td>';
                } else if (x % 2 !== 0 && y % 2 !== 0) {
                    board += '<td class="black"></td>';
                } else {
                    board += '<td></td>';
                }
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
};

renderer.renderBoard();
