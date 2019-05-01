// Задание 1
let a = 
[
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b=[];

a.forEach(function(elem,key)
{
    b[key] = [];
    elem.forEach(function(elem2,key2)
    {
        b[key][key2] = Object.assign({},elem2);
    });
});

console.log('Задание 1');

a[0][0].name=0;
console.log(b);
console.log(b[0][0].name);

// Задание 2
console.log('Задание 2');
let bd =
{
    item1: {
        article: 1423,
        price: 100,
        quantity: 7,
        desc: 'description1',
        image: '../img/pic1.jpg'
    },
    item2: {
        article: 22352,
        price: 200,
        quantity: 8,
        desc: 'description2',
        image: '../img/pic2.jpg'
    },
    item3: {
        article: 35432,
        price: 300,
        quantity: 9,
        desc: 'description3',
        image: '../img/pic3.jpg'
    }
}

// Задание 2.а.

let basket = [];

function addToBasket (id, col) 
{
    if (bd[id].quantity >= col)
    { 
        let prod = 
        {
            id: id,
            quantity: col,
            price: bd[id].price
        };
        basket.push(prod);
        bd[id].quantity -= col; 
    }
    else
    {
        console.log('Запрашиваемое количество товара превышает его количество на складе');
    }
}

addToBasket('item1', 2);
addToBasket('item2', 3);
addToBasket('item3', 1);
addToBasket('item1', 6);
console.log(bd);
console.log(basket);

// Задание 2.б.
function countBasketPrice(basket)
{
    let sum = 0;
    basket.forEach(function (el)
    {
        sum += el.price * el.quantity;
    });
    return sum;
}

function display(elem, value) {
    document.querySelector(elem).innerHTML = value;
  }
  
  basketSumm = countBasketPrice(basket);
  display('#summ', `Сумма вашей корзины = ${basketSumm} руб.`);

console.log('Сумма вашей корзины = ' + countBasketPrice(basket));

// Задание 3
console.log('Задание 3');
for (i=0; i <= 9; console.log(i), i++) {}

// Задание 4
console.log('Задание 4');
let pic = [];

for (let i=0; i < 20; i++)
{
    pic.push('*');
    console.log(pic.join(''));   
}
