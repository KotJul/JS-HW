// Задача 1
/*
Получите по адресу https://jsonplaceholder.typicode.com/users массив объектов

Преобразуйте их в массив объектов вида
  [
      {
          id: 1, // соответсвующий id из JSON
          name: 'FIRSTNAME', //Возьмите только имя (часть строки до первого пробела), сделайте все буквы заглавными
          phone: 'номер телефона', // Удалите все кроме цифр
          location: {
              street: 'Улица',
              index: 'Почтовый индекс',
              number: 'Номер suite' // Оставьте только цифры ("suite": "Apt. 950" => number: 950 (число))
          }
      },
      ....
  ]
Полученный массив преобразуйте заменив phone на сумму ТОЛЬКО четных цифр из этого же свойства
Отсортируйте массив по name
Удалите из массив всех в номере дома которых есть цифра 1
Разделите индекс всех на 2 и округлите результат до целого вверх
Выведите результат
*/

// 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его xhr.open('GET', 'Адрес сервера'); 
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


// // 3. Этот код сработает после того, как мы получим ответ сервера xhr.onload = function() {}
// xhr.onload = function () {
//   console.log('Onload');
//   const result = xhr.response; //  Получаем ответ, это JSON строка
//   const object = JSON.parse(result); // Преобразуем строку в JS объект

//   // Пишем код домашки ТУТ!!!
//   const f = object
//     .map(user => {
//       return {
//         id: user.id,
//         name: user.name.split(' ')[0].toUpperCase(),
//         phone: user.phone.replaceAll('.', '')
//           .replaceAll('x', '')
//           .replaceAll(' ', '')
//           .replaceAll('-', '')
//           .replaceAll('(', '')
//           .replaceAll(')', '')
//           .split('')/*разбиваем строку на массивы*/
//           .filter(i => i % 2 == 0)/*делаем массив только из четных чисел*/
//           .reduce ((a,b)=> +a + +b),/*складываем только четные элементы массива*/
//         location: {
//           street: user.address.street,
//           index: user.address.zipcode.replaceAll('-', ''),
//           number: user.address.suite.split(' ')[1]// разделили массив на слова и обрезали строку до пробела
//           .split('')/*разделили массиы на буквы*/
//           .includes(1), /*нашли те массивы где есть цифра 1*/
//         },
//       }

//     })
//     .sort((a, b) => (a.name > b.name) ? 1 : -1) /*сортировка по алфавиту*/
//     // .map(a => a.zipcode)
//     //   .filter(str =>{
//     //     const indDelen = +str /2;
//     //     return indDelen.Math.round()
//     //   })/*надо разобраться*/
  
//     console.log(f);
// }

// // 4. Отсылаем запрос xhr.send();
// xhr.send();
// console.log('Done');


/**************************************************************/

/*Задача 2
Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов

Удалите из массив все элементы title который больше 25 символов
Каждуй первую букву слова из свойства body сделайте заглавной
Отсортируйте массив по длине body
Удалите из всех элементов свойство userId
Выведите результат
Преобразуйте результат в JSON строку и вывидите*/

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

request.onload = function () {
  console.log('Onload');
  const result = request.response;
  const object = JSON.parse(result);

  const tt = object
    .map(posts => {
      return {
        userId:posts.userId,
        id: posts.id,
        title: posts.title,
        body: posts.body.split(' ')/*.toUpperCase()*/,
      }
    })
    .sort((a,b) => (a.body.lenth() - b.body.lenth()) ? 1 : -1)
    // let json = JSON.stringify(tt);/*Преобразуйте результат в JSON строку и вывидите*/
    // console.log(json);
    console.log(tt);
}
request.send();
console.log('Done');