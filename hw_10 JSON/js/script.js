/**************************************************************/

/*Задача 2 с прошлой домашки ДОДЕЛАТЬ
Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов

Удалите из массив все элементы title который больше 25 символов
Каждуй первую букву слова из свойства body сделайте заглавной
Отсортируйте массив по длине body
Удалите из всех элементов свойство userId
Выведите результат
Преобразуйте результат в JSON строку и вывидите*/

// const request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// request.onload = function () {
//   console.log('Onload');
//   const result = request.response;
//   const object = JSON.parse(result);

//   const tt = object
//     .map(posts => {
//       return {
//         userId:posts.userId,
//         id: posts.id,
//         title: posts.title,
//         body: posts.body.split(' ')/*.toUpperCase()*/,
//       }
//     })
//     .sort((a,b) => (a.body.lenth() - b.body.lenth()) ? 1 : -1)
//     // let json = JSON.stringify(tt);/*Преобразуйте результат в JSON строку и вывидите*/
//     // console.log(json);
//     console.log(tt);
// }
// request.send();
// console.log('Done');

/*********************************************************************/

// Задача 1 09.02.22 среда

// Используя код примера получите json (Адрес) и преобразуйте объекты

// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его
// xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//     console.log('Onload');
//     const result = xhr.response; //  Получаем ответ, это JSON строка
//     const object = JSON.parse(result); // Преобразуем строку в JS объект
//     // Пишем код домашки ТУТ!!!
//     console.log(object);  // Выводим результат по необходимости
// };

// // Этот код сработает если мы не получим ответ от сервера
// xhr.onerror = function() {
//   console.error("Запрос не удался");
// };
// Отсортируйте все альбомы по заголовку
// Найдите количество картинок ширина и высота которых больше 800px
// Преобразуйте альбом
// Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
// Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
// Удалите альбомы в которых меньше 5 картинок


// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();
// 2. Настраиваем его
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json');
// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
  console.log('Onload');
  const result = xhr.response; //  Получаем ответ, это JSON строка
  const object = JSON.parse(result); // Преобразуем строку в JS объект


  // Пишем код домашки ТУТ!!!
  const f = object.albums
    .map(albums => {
      return {
        title: albums.title,
        images: albums.images,
        authorId: albums.authorId,
      }
    })
    .sort((a, b) => { // Отсортируйте все альбомы по заголовку
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      }
      return 0
    })
  console.log(f); // Выводим результат по необходимости

  // Найдите количество картинок ширина и 
  // высота которых больше 800px
  const widthEndHeight = object.images.filter(i => Number.parseInt(i.width) > 800 && Number.parseInt(i.height) > 800)
  console.log(widthEndHeight);

  // Добавьте свойство user куда поместите объект 
  // соответствующего автора (id автора == id пользователя)


  object.albums.forEach(album => {
    album.user = object.users.find(user => user.id === album.authorId); /*добавляет нашего юзера в альбом*/
  })
  console.log(object)


  // Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
  const img = object.albums.forEach(album => {
    album.images.find(image => image.imageId === album.image)
  })

  console.log(img)

  // Удалите альбомы в которых меньше 5 картинок
  // const filterAlb = object.albums
  // .map(albums => {
  //   return {
  //     images:albums.images.join()/*сделали строку*/
  //     .length(),
  //   }
  // })
  //   object.albums.forEach(album =>{
  //     album.images.filter(image => image.lenght() < 5 )
  //   })
  //   console.log(object)
}


// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function () {
  console.error("Запрос не удался");
};