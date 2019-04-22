// Задание 1. Почему код дает именно такие результаты
// Пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // 2. Префиксный инкремент, значение аргумента инкремента сперва вычисляется, после записывается в переменную с.

// Пример 2
d = b++;
alert(d); // 1. Постфиксный инкремент, значение аргумента вычисляется после присвоения переменной с.

// Пример 3
c = (2+ ++a)
alert(c); // 5. Префиксный инкремент, значение аргумента инкремента сперва вычисляется, потом к нему прибавляется число 2, после записывается в переменную с. После прошлой операции значение в а равнялось 2.

// Пример 4
d = (2 + b++);
alert(d); // 4. Постфиксный инкремент, значение аргумента вычисляется после присвоения переменной с. После первого инкрментирования значение в b = 2. Потом к нему прибавляется число 2.

alert (a); // 3. К прошлому значению (2) прибавилась 1. 2+1 =3
alert(b); // 3. К прошлому значению (2) прибавилась 1. 2+1 =3

// Задание 2.
/* let */ a = 2;
let x = 1 + (a *= 2);
console.log('Задание 2. х = ' + x); // x = 5 Потому что a = a * 2, т.е. а = 2 * 2 = 4; х = 1 + 4 = 5;

// Задание 3. Они уже объявлены выше, придется переопределить
a = parseInt(Math.random() * 100);
b = parseInt(Math.random() * 100);

console.log('Задание 3. a = ' + a + '. b = ' + b)
if ( a >= 0 && b >= 0) console.log(a - b);
else if (a < 0 && b < 0) console.log(a * b);
else console.log(a + b);

// Задание 4.
function sum(num1, num2)
{
    return num1 + num2;
}

function diff(num1, num2)
{
    return num1 - num2;
}

function mult(num1, num2)
{
    return num1 * num2;
}

function div(num1, num2)
{
    if(num2 === 0) return Infinity;
    else return num1 / num2;
}

console.log(`Задание 4. Сумма ${a} + ${b} = ${sum(a,b)}. Разность ${a} - ${b} = ${diff(a,b)}. Произведение ${a} * ${b} = ${mult(a,b)}. Частное ${a} / ${b} =  ${div(a,b)}`);

// Задание 5
let operation = '';
function mathOperation(arg1, arg2, operation)
{
    switch (operation)
    {
        case '+':
        return sum(arg1,arg2);
        // break в case-ах не нужен если есть return, т.к. return прерывает выполнение функции в целом.
        case '-':
        return diff(arg1,arg2);
        case '*':
        return mult(arg1,arg2);
        case '/':
        return div(arg1,arg2);
        default:
        console.log('Вы ввели не верный оператор');
    }
}

console.log(`Задание 5. Кулькулятор. Сумма ${a} + ${b} = ${mathOperation(a,b,'+')}. Разность ${a} - ${b} = ${mathOperation(a,b,'-')}. Произведение ${a} * ${b} = ${mathOperation(a,b,'*')}. Частное ${a} / ${b} =  ${mathOperation(a,b,'/')}`)

// Задание 6.

function power(val,pow)
{
    if (pow === 0) return 1;
    else if (pow > 0)
    {
        if (pow === 1) return val;
        return val * power(val, --pow);
    }
    else (pow < 0)
    {
        if (pow === -1) return 1/val;
        return 1/val * power(val, ++pow);
    }
}

console.log('Задание 6. ' + power(2,(-4)));

// Задание 7
let UserStr = prompt('Введите пароль');

function path(pass)
{
    if (testLength(pass) && reqSymbol(pass) && startEndSymbol(pass) === true) alert('Корректный пароль');
    else alert('Некорректный пароль');
}

function testLength(pass)
{
    if (pass.length < 3 || pass.length > 12) return false;
    return true;
}

function reqSymbol(pass)
{
    if (pass.indexOf('&') === -1 && pass.indexOf('$') === -1 && pass.indexOf('%') === -1 && pass.indexOf('*') === -1) return false;
    return true;
}

function startEndSymbol(pass)
{
    if (pass.indexOf('q') === 0 || pass.lastIndexOf('z') === (pass.length - 1)) return true;
    return false;
}

path(UserStr);