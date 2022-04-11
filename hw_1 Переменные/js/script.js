// задание 1 Посчитайте выражения:
let c = +prompt('введите число');
alert(3 + ((28*c/c**2-49) +
(c-7/c+7) * (c/c+7) - (c/c-7)));

let x = +prompt('введите число');
alert (4.5 + (25*x**2 - 4**-1) /
(5*x + 2**-1) - 3*x);

let a = +prompt('введите число');
alert ((2*a-2/a-2)+
1-((8*a/a**2-4)+
(a-2/a+2)*a/a+2));

// задание 2 
// Пользователь вводит катеты прямоугольного треугольника. 
// Найдите площадь, периметр и гипотенузу треугольника.
let m = +prompt('введите значение первого катета');
let n = +prompt('введите значение второго катета');
alert(1/2*m*n);

let o = +prompt('введите значение гипотенузы');
alert(m+n+o);

alert('Длина гипотенузы равна '+Math.sqrt(m**2 + n**2) );


// задание 3
// Пользователь вводит три числа. 
// Найдите наибольшее число из них
let firstNumber = +prompt('введите число');
let secondNumber = +prompt('введите число');
let thirdNumber = +prompt('введите число');

if (firstNumber > secondNumber,firstNumber>thirdNumber)
{
alert (firstNumber);
}
else if(secondNumber>firstNumber,secondNumber>thirdNumber)
{
alert (secondNumber);
}

else if (thirdNumber>firstNumber,thirdNumber>secondNumber)
{
alert (thirdNumber );
}

// задание 4
// Пользователь вводит число. 
// Определить является ли оно четным (вывести да или нет)
let f= prompt ('Введите число');
if ( f % 2 == 0 )
{
alert ( " Да ");
}else {
alert ("Нет");
}
