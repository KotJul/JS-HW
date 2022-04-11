// дз 26.10.22

let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];


// * Определите есть ли в массиве одинаковые элементы


let chNeg = arr.filter(e => e % 2 == 0 && e < 0);
console.log(chNeg);
let firstChNeg  = chNeg.shift();
console.log(firstChNeg);// Найдите первый четный отрицательный элемент

let chElement = arr.filter(e => e > 0);
console.log(chElement);// Получите новый массив с четными элементами


/*
let find = arr.findIndex(arr);
console.log(find);*/
// newMassive = arr.filter(i => i % 2 == 0);
// console.log(newMassive)/// Получите новый массив с элементами через 1 по порядку !!!!!!!! НЕ РЕШЕНО

let reverser = arr.reverse();
console.log(reverser);// Вывидите все элементы массива в обратном порядке.

let result = ((a,b) => a*b);
console.log(arr.reduce(result));// Найти произведение элементов массива

let plus = 0;
arr.forEach(e =>{
  if(e > 0){
    plus ++;
  }
})
console.log(plus);// Найти количество положительных элементов массива



let midleArif =arr.filter(e => e >= -2 && e <=10);
 console.log(midleArif);

let sum = midleArif.reduce((a,b) => (a+b)/midleArif.length);
console.log(sum);// Вычислить среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10


