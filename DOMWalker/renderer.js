let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },

    generateBoard() {
        let board = '';
        for(let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    renderUserPosition(position) {
        let square = this.getSquare(position);
        square.classList.add('user');
    },

    getSquare(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    }
};
