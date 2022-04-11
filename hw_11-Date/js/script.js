// // Примеры с теории

// // увеличиваем дату 28 февраля на 2 дня
// var d = new Date(2022, 1, 28);
// d.setDate(d.getDate() + 2);

// alert( d );
// // получим дату, отдалённую от имеющейся на нужный промежуток времени.
// // В данном примере увеличиваем дату на 70 сек
// var d = new Date();
// d.setSeconds(d.getSeconds() + 70);

// alert( d );

// Домашка

// Задача 1 

let dates = new Date();// **Получите текущую дату и время
console.log(dates);

console.log(dates.getDate());// **Выведите текущий день.
console.log(dates.getMonth());// **Выведите текущий месяц.Покажет 1 потому что месяцы считаються с 0
console.log(dates.getFullYear());// **Выведите текущий год.

let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];/*чтобы узнать день недели создать переменную с массивом дней недели*/
console.log('Сегодня ' + days[dates.getDay()]);// **Выведите номер текущего дня недели

console.log('******************');
// Задача 2

let weekDays =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let march = new Date(2005, 2, 10);
console.log('10 Марта это ' +weekDays[march.getDay()]);// Узнайте, каким днем недели былл 10-го марта 2005 года

console.log('******************');
// Задача 3

// Выведите количество дней с 1-го января 1970 года до настоящего момента времени. Результат округлите

let now = new Date();
let jan = new Date(1970,0,1);
let oneDay = 1000 * 60 * 60 * 24;/* 1000 - миллисек в сек,60сек в мин, 60 мин в часе,24 часа в сутках */ 
let result = now.getTime() - jan.getTime();/*разница м/у датами*/
let numOfDays= Math.round(result / oneDay);/*округление*/
console.log(numOfDays);

console.log('******************');

// Задача 4

// Выведите количество часов, прошедшее между 1 марта 1988 года и 8 марта 2015 года

let dateMarch88 = new Date(1988,2,1);
let dateMarch15 = new Date(2015,2,8);
let raznica = (dateMarch15.getTime() - dateMarch88.getTime())/1000/60/60;/* делим на 1000 -получим млсек,делим на 60 - получим мин,делим на 60 - получим часы*/
console.log(raznica);

console.log('******************');

// Задача 5 

// Выведите на экран количество секунд, которое осталось до конца дня.

let nowDate = new Date();

let allDay = new Date(2022,1,15,0,0,0,0);/*устанавливаем текущую дату на начало дня*/

let leftSec = (allDay - nowDate)/1000;
console.log(leftSec);


// let now = new Date();
// let endOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
// let difference = endOfTheDay - now; 
//  console.log(Math.round(difference / 1000))

console.log('******************');

// Задача 6

// Преобразуйте массив таким образом, что бы в нем все элементы были уникальными (встречаются лишь один раз)

// const arr = [1, 2, 3, 1, 2, 5, 6, 3];

// const noDub = new Set(arr);/*возвращает объект,а надо массив*/
// console.log(noDub);

// const arr = [1, 2, 3, 1, 2, 5, 6, 3];

// let noDub = arr.filter((e,index) => arr.indexOf(e) === index);
// console.log(noDub);

// console.log('******************');


// Задача 7

// Удалить в массиве все числа, которые повторяются более двух раз.

// const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8 ]
// console.log(arr);

// let del = []; 
// for (let i = 0; i < arr.length; i++) {
//   let all = arr.filter(item => { // покажет количество вхождение i-того элемента в массив
//     return item === arr[i];
//   }).length;
  
//   if (all === 3) del.push(arr[i]); // если вхождений - 3, то добавляем в список элементов, подлежащих удалению
// }

// del.forEach(item => { // избавляемся от ненужных элементов
//   arr.splice(arr.indexOf(item), 1);
// });

// console.log(arr);
// console.log('******************');

// Задача 8

// Удалить из второго массива только те элементы, которые встречаеются в первом массиве

// let arr = [1, 3, 5];

// let arr2 = [1, 2, 3, 4, 5, 6];

// arr2 = arr2.filter(e => !~ arr.indexOf(e)); 

// console.log(arr2);



