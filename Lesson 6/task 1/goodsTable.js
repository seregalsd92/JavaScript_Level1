let htmlPage = {
    config: {
        colsInLine: 3,
        rows: 0,
        colsOnLastRow: 0
    },

    run() {
        //генерируем таблицу товаров
        this.init();
        let board = this.generateTable();
        goodsDiv = document.getElementById('basket');
        //добавляем таблицу в body
        goodsDiv.insertAdjacentHTML("beforebegin", board);
        buttonElements = document.querySelectorAll('input');
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].addEventListener('click', function(event) {
                event.preventDefault();
                let tdCurr = event.path.find (function(element) {
                    return element.tagName === 'TD';
                });
                let goodNumRow = +tdCurr.dataset.rownum;
                let goodNumCol = +tdCurr.dataset.colchar;
                let currGood = htmlPage.currentGoodNum(goodNumRow,goodNumCol);
                Basket.putProduct(currGood,1);
            });
        }
    },

    generateTable() {
        let board = "";
        let colsinCurrentLine = this.config.colsInLine;
        for (let i = 0; i < this.config.rows; i++) {
            let row = "";
            if (i === this.config.rows - 1) {colsinCurrentLine = this.config.colsOnLastRow};
            row = this.generateRow(colsinCurrentLine, i);
            board += row;
        }
        return `<table>${board}</table>`;
    },

    generateRow(colsinCurrentLine, rowNum) {
        let row = "";
        for (let i = 0; i < colsinCurrentLine; i++) {
            let field = "";
            field = this.generateField(rowNum, i);
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    generateField(rowNum, colChar) {
        let currGood = this.currentGoodNum(rowNum, colChar);
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="">
        <img src="${db[currGood].image}">
        <h4>${db[currGood].name}</h4>
        <p>${db[currGood].desc}</p>
        <input type="submit" value="Купить"></input>
        </td>`;
    },

    init() {
        let ratio = db.length / this.config.colsInLine;
        let remainder = db.length % this.config.colsInLine;
        this.config.rows = remainder === 0 ? parseInt(ratio) : parseInt(ratio) + 1;
        this.config.colsOnLastRow = remainder === 0 ? this.config.colsInLine : remainder;
    },

    currentGoodNum(rowNum, colChar) {
        return rowNum * htmlPage.config.colsInLine + colChar;
    }
}

htmlPage.run();