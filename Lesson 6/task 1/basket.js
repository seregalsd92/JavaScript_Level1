// БД Товаров
let db =
[
    {
        article: 1423,
        name: 'pen',
        price: 27,
        quantity: 7,
        desc: 'blue',
        image: './img/pen.jpg'
    },
    {
        article: 22352,
        name: 'pencil',
        price: 12,
        quantity: 8,
        desc: 'HB',
        image: './img/pencil.jpg'
    },
    {
        article: 35432,
        name: 'notebook',
        price: 34,
        quantity: 9,
        desc: 'A6 format',
        image: './img/notebook.png'
    },
    {
        article: 2345,
        name: 'rubber',
        price: 8,
        quantity: 12,
        desc: 'double',
        image: './img/rubber.jpg'
    },
    {
        article: 9234,
        name: 'copybook',
        price: 56,
        quantity: 11,
        desc: '48 sheets',
        image: './img/copybook.jpg'
    },
    {
        article: 8341,
        name: 'line',
        price: 23,
        quantity: 5,
        desc: '30 cm. Orange.',
        image: './img/line.jpg'
    },
    {
        article: 4572,
        name: 'correction fluid',
        price: 28,
        quantity: 6,
        desc: '20 ml',
        image: './img/correction fluid.jpg'
    },
    {
        article: 2399,
        name: 'pencil sharpener',
        price: 51,
        quantity: 24,
        desc: 'double. metall.',
        image: './img/pencil sharpener.jpg'
    }
];

// Корзина
let Basket = 
{
    goodlist: [],
    putProduct(id,col) {
        if (db[id].quantity >= col)
        { 
            let idx = this.goodlist.findIndex(function(elem) {
                return elem.id === id;
            });
            if (idx === -1) {
                let prod = 
                {
                    id: id,
                    count: col,
                    price: db[id].price
                };
                this.goodlist.push(prod);
                db[id].quantity -= col; 
            }
            else {
                this.goodlist[idx].count += col;
            }
        }
        else
        {
            console.log('Запрашиваемое количество товара превышает его количество на складе');
        }
        this.printBasketTotalValues();
    },
    countTotalPrice() {
        let sum = 0;
        this.goodlist.forEach(function (el)
        {
            sum += el.price * el.count;
        });
        return sum;
    },
    countTotalNumber() {
        let num = 0;
        this.goodlist.forEach(function (el)
        {
            num += el.count;
        });
        return num;
    },
    printBasketTotalValues() {
        let basketDiv = document.getElementById('basket');
        let header = '<h3>Корзина</h3>'
        let goodListStr = 'Корзина пуста';
        if (this.goodlist.length > 0) {
            goodListStr = '<ul>';
            for (let i = 0; i < this.goodlist.length; i++) {
                goodListStr += this.generateBasketItem(i);
            }
            goodListStr += `</ul><p>Общая стоимость корзины = ${Basket.countTotalPrice()} руб.
            Общее количество товаров в корзине = ${Basket.countTotalNumber()} шт.`
        }
        basketDiv.innerHTML = header + goodListStr;
    },
    generateBasketItem(index) {
        let currentItem = this.goodlist[index];
        return `<li>${index+1}. ${db[currentItem.id].name}, ${currentItem.count}шт, ${currentItem.price}руб/шт.`;
    }
};

for (let index = 0; index < db.length; index++) {
    if(index % 2 === 0) {
        Basket.putProduct(index,1);
    } else {
        Basket.putProduct(index,2);
    }
}