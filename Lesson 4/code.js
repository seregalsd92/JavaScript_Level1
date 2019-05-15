// Задание 1
console.log('Задание 1');

function numToObj()
{
    let outObj = {};
    let key;
    let userNum = prompt('Введите 3-х значное число');
    
    if (userNum <= 999 && !isNaN(Number(userNum)))
    {
        let userArr = userNum.split('');
        for (let i = 0; i < userNum.length; i++)
        {
            switch(i)
            {
                case 0: key = 'units';
                break;
                case 1: key = 'tens';
                break;
                case 2: key = 'hundreds';
                break;
            }
            outObj[key] = userArr.pop();
        }
    }
    else
    {
        console.log('Ваше число больше 999 или не является числом');
    }

    return outObj;
}
console.log(numToObj());

// Задание 2
console.log('Задание 2');
let db =
[
    {
        article: 1423,
        name: 'pen',
        price: 27,
        quantity: 7,
        desc: 'blue',
        image: '../img/pic1.jpg'
    },
    {
        article: 22352,
        name: 'pencil',
        price: 12,
        quantity: 8,
        desc: 'HB',
        image: '../img/pic2.jpg'
    },
    {
        article: 35432,
        name: 'notebook',
        price: 34,
        quantity: 9,
        desc: 'A6 format',
        image: '../img/pic3.jpg'
    },
    {
        article: 2345,
        name: 'rubber',
        price: 8,
        quantity: 12,
        desc: 'double',
        image: '../img/pic4.jpg'
    },
    {
        article: 9234,
        name: 'copybook',
        price: 56,
        quantity: 11,
        desc: '48 sheets',
        image: '../img/pic5.jpg'
    },
    {
        article: 8341,
        name: 'line',
        price: 23,
        quantity: 5,
        desc: '30 cm. Orange.',
        image: '../img/pic6.jpg'
    },
    {
        article: 4572,
        name: 'correction fluid',
        price: 28,
        quantity: 6,
        desc: '20 ml',
        image: '../img/pic7.jpg'
    },
    {
        article: 2399,
        name: 'pencil sharpener',
        price: 51,
        quantity: 24,
        desc: 'double. metall.',
        image: '../img/pic8.jpg'
    },
];

// Задание 2.а.
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
    }
};

for (let index = 0; index < db.length; index++) {
    if(index % 2 === 0) {
        Basket.putProduct(index,1);
    } else {
        Basket.putProduct(index,2);
    }
}

console.log(`Общая стоимость корзины = ${Basket.countTotalPrice()} руб.
Общее количество товаров в корзине = ${Basket.countTotalNumber()} шт.`);