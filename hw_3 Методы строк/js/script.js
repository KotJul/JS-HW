
// Задача 1    Удалите в строке все символы '!'

 let str = 'asd!asdf!adf!asdf!!!!'
 while (str.includes('!')){
 str = str.replaceAll('!','');
 }
 console.log(str);
 
// Задача 2 Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
let s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, illum dolore eu fugiat nulla pariatur';
console.log( s.split(' ').length);

// В данной строке вставить после каждого символа 'a' символ 'b'.
if(s.includes('s')){
  s =s.replace('a', 'ab');
} 
console.log(s);

// Удалите 3 первых слова
let sl = s.substr(18);
console.log(sl);

// Задача 3 Дан email в строке. Определить, является ли он корректным: 
// наличие символа '@' и точки
// наличие не менее двух символов после последней точки !НЕ РЕШЕНА!

email = 'admine@mail.com';

if(email.includes('@','.')){
  
  console.log('email корректный');

} else {
  console.log('email не крректный');
}
/*email.substr(-4 [, length]);*/

// Задача 4 Дана строка, содержащая полное имя файла 
// Выделите из этой строки имя файла без расширения.

 let str1 = 'c:\WebServers\home\testsite\www\myfile.txt';
 str1 = str1.slice(0,-4);
 
 console.log(str1);



// Задача 5 Удалить в строке все цифры.

let str3 = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit,';

strNew = str3.replace(/[0-9]/g, '')/*убирает те значения которые в []*/
console.log(strNew);



// Задача 6 Замените все символы '+' на '-' и наоборот

 let str4 = '+++++------==---+++++';

 /*str4 = str4.replace(/[+-]/g,function (char) {return char==='-'?' +':''},;
 console.log(done);*/

 if(str4.includes('+')){
  strNew2 = str4.replaceAll('+','-');
 }
console.log(strNew2);


// Задача 7 Напишите функцию которая принимает r и возвращает длину окружности радиусом r

const PI = 3.14159265359;

function calcLengthCircle(radius){
  let LengthCircle = PI * (radius*2);

  return LengthCircle;
}
let funcResult = calcLengthCircle(7);
console.log(`Длина окружности: ${funcResult}`);

// Задача 8 Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %

let discount = 3.5;

function calcPriceWithDisc(price){
  let calcDics = (price*discount)/100;
  let newPriceWithDics = price-calcDics;

  return newPriceWithDics;
}
let resultFunc = calcPriceWithDisc(120);
console.log(`Новая цена со скидкой: ${resultFunc} `);

