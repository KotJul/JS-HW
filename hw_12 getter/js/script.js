// Задача 1
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
// Массив, конечно же, может быть произвольным.
let mas = [
  [1, 2, 3],
  [4, 5],
  [6]
];

let result = mas.flat().reduce((a, b) => a + b);
console.log(result)

// Задача 2
// Создайте объект User c полями firstName, lastName, year(год рождения)
// Реализуйте геттер, который возвращает полное имя пользователя
// Реализутей геттер age на основе года рождения пользователя
// Создайте массив из 10 пользователей
// Добавьте возможность вывода пользователей старше определенного возраста n, упорядоченых в алфовитном порядке в обратном направлении
// Добавьте возможность удаления пользователей младше определенного возраста n

let user = { // Создайте объект User c полями firstName, lastName, year(год рождения)
  firstName: "Sarra",
  lastName: "Tompson",
  year: 1990,

  get fullName() { // Реализуйте геттер, который возвращает полное имя пользователя
    return `${this.firstName} ${this.lastName}`;
  },
  get age() { // Реализутей геттер age на основе года рождения пользователя
    return `${this.year}`;
  }
};
console.log(user.fullName);
console.log(user.age);


let users = [
  { us1:'Raider', age: 22},
  { us2:'Smit', age: 42},
  { us3:'Klaus', age: 37},
  { us4:'Grofman', age: 15},
  { us5:'Sanders', age: 98},
  { us6:'Dalmaer', age: 73},
  { us7:'Sanders', age: 10},
  { us8:'Kat', age: 29},
  { us9:'Stone', age: 33},
  { us10:'Nub', age: 65},
]; // Создайте массив из 10 пользователей

let usersAge = users.filter(function(num){// Добавьте возможность вывода пользователей старше определенного возраста n, упорядоченых в алфовитном порядке в обратном направлении
  return num.age > 20;
}).reverse();
let del = delete users.age < 30;

console.log(usersAge)
console.log(del)




// Задача 3
// Создайте объект shape и его наследников circle, rectangle.

// Oбъект shape содержит метод draw()(выводит название фигуры и ее цвет) и переменную хранящую цвет.
// Oбъект rectangle содержит свойство хранящее длины двух его сторон
// Oбъект circle содержит свойство radius
// Oбъекты circle, rectangle содержат координаты точек.
// Создать массив содержащий эти фигуры.
// В цикле нарисовать их (вызвать метод draw).
let log = console.log;
let shape = {
  color:'red',
  draw(){
    return `${this.name} ${this.color}`;
  }
}
console.log(shape);

let circle = {
  radius: 40,
  x: 10,
  y: 15,
}
Object.setPrototypeOf(circle, shape);
let rectangle = {
  long: 20,
  x: 7,
  y: 29,
}
Object.setPrototypeOf(rectangle, shape);

let novMasive = [circle,rectangle];// Создать массив содержащий эти фигуры.

for(let i = 0;i < novMasive.length; i++){  // В цикле нарисовать их (вызвать метод draw).
  novMasive[i].draw();
}
console.log(novMasive);

// Задача 4
// Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой научной работы.

// Student содержит свойства:

// firstName
// lastName
// group
// averageMark (содержащую среднюю оценку).
// Aspirant имеет дополнительное свойство work

// Создать метод getScholarship() для Student, который возвращает сумму стипендии. Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.

// Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.

// Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

function Student(firstName, lastName, group, averageMark){
  this.firstName = firstName;
  this.lastName = lastName;
  this.group = group;
  this.averageMark = averageMark;

}
// Student.prototype.getScholarship = function(){ /*НЕ РАБОТАЕТ*/
//   if(this.averageMark >= 5){
//     return 100
//   }else{
//     return 80
//   }
// }

let student1 = new Student('Tom','Jonson',112,5);
let student2 = new Student('Lisa','Ride',38,8);
let student3 = new Student('Oleg','Kurov',100,3);
let student4 = new Student('Tonia','Juk',112,4);
let student5 = new Student('Sasha','Nolik',100,6);

let students = [student1,student2,student3,student4,student5]

console.log(students.getScholarship());

function Aspirant(work){
  this.work = work;
}
Object.setPrototypeOf(Aspirant, Student);

let aspirant1 = new Aspirant('Pasha','fox',55,5);
let aspirant2 = new Aspirant('Galina','Kot',68,2);
let aspirant3 = new Aspirant('Elena','Mozir',37,9);
let aspirant4 = new Aspirant('Vasiliy','Stogov',21,8);
let aspirant5 = new Aspirant('Lola','Bukova',66,3);

let aspirants = [aspirant1,aspirant2,aspirant3,aspirant4,aspirant5];

console.log(aspirants)