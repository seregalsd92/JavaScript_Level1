// Задание 1
let Tc = Number(prompt("Введите температуру в градусах С:"));
var Tf = (9/5) *Tc + 32;
alert("Температура по фарингейту" + Tf);
// Задание 2
let admin = '';
let name = 'Василий';
admin = name;
console.log(admin);
// Задание 3
console.log(10+10+"10"); //2010. Операторы имеют одинаковый приоритет. Сперва складываются 2 числа, после происходит конкотенация результата сострокой.
console.log(10+"10"+10); //101010. Операторы имеют одинаковый приоритет. При сложении числа со строкой происходит конкотенация и получается строка. Сперва одно число складвыается со строкой, после результирующая строка складывается с числом.
console.log(10+10+ +"10"); // 30. + унарный оператор, аналог функции Number, которая приводит строку к числу, если это возможно. В результате происходит сложение трех чисел.
console.log(10 / -""); // -Infinity. Происходит динамическая типизация, не явное приведение типов. Пустая строка автоатически приводится к числу 0, перед которым стоит -. Любое положительное число (кроме 0 и Infinity) деленное на -0 получается минус бесконечность в теории пределов.
console.log(10 / +"2,5"); // Nan. В JS разделитель целой и дробной части числа обозначается как "." Функция Number не может явно привести строку "2,5" к числу и возвращает тип NaN (Not a number). Любые арифметические операции с этим типом возвращают NaN.
// Задание 4
/*let mode = "normal"; Корректно, не является ключевым словом в JS
let my_valu3 = 102; Корректно
let 3my_value = "102"; Не корректно. Имена переменных в js должны начинаться с буквы, подчеркивания или знака $
let __hello__ = "world"; Корректно
let $$$="money"; Корректно
let !0_world = true; Не корректно. Имена переменных в js должны начинаться с буквы, подчеркивания или знака $*/