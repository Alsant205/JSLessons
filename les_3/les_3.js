//##1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
for (var num = 2; num <= 100; num++){
    var res = 0;
    for (var count = 2; count < num; count++){
        if (num % count == 0){
            break;
        }
        if (res != num) {
            console.log(num);
            }
        res = num;
    }
}

/*##2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
стоимости корзины в зависимости от находящихся в ней товаров.

Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

var bag = [10, 20, 30];

function countBasketPrice(price) {
    var i = 0;
    var res = 0;
    while (i < price.length) {
        res = res + price[i];
        i++;
    }
    return res;
}

console.log(countBasketPrice(bag));