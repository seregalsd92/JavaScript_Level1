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
        buttonElements = document.querySelectorAll('button');
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].addEventListener('click', function(event) {
                /* tdCurr = event.path.find (function(element) {
                    return element == 'td';
                }); */
                let goodNumRow = +event.path[1].dataset.rownum; // tdCurr почему-то ничего не находит, пришлось использовать хардкод
                let goodNumCol = +event.path[1].dataset.colchar; // tdCurr почему-то ничего не находит, пришлось использовать хардкод
                let currGood = goodNumRow * 3 + goodNumCol; // Почему то в этом месте не видно this.config.colsInLine, пришлось задать константно 3
                console.log('goodNumRow ' + goodNumRow);
                console.log('goodNumCol ' + goodNumCol);
                console.log('currGood ' + currGood);
                Basket.putProduct(currGood,1);
            });
        }
        console.log(buttonElements);
        console.dir(buttonElements);
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
        let currGood = rowNum * this.config.colsInLine + colChar;
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="">
        <img src="${db[currGood].image}">
        <h4>${db[currGood].name}</h4>
        <p>${db[currGood].desc}</p>
        <button>Купить</button>
        </td>`;
    },

    init() {
        this.config.rows = this.rowsCount(this.config.colsInLine);
        this.config.colsOnLastRow = this.colsOnLastLine(this.config.colsInLine);
    },

    rowsCount(colsNum) {
        let ratio = db.length / colsNum;
        return db.length % colsNum === 0 ? parseInt(ratio) : parseInt(ratio) + 1;
    },

    colsOnLastLine(colsNum) {
        let remainder = db.length % colsNum;
        return remainder === 0 ? colsNum : remainder;
    },

/*     currentGoodNum(rowNum, colChar) {
        return rowNum * this.config.colsInLine + colChar;
    } */
}

htmlPage.run();