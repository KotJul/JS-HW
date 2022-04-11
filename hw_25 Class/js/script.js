// Задача 1
// Создать класс машина, имеющий марку , число цилиндров, мощность. 
// Определить конструктор и функцию печати. 
// Создать производный класс – грузовики, имеющий грузоподъемность кузова. 
// Определить конструктор, функцию печати. 
// Определить функции переназначения марки и грузоподъемности.

// class Car{
//   constructor(brand,cylinders,power){
//   this.name = 'Car';
//   this.brand = brand;
//   this.cylinders = cylinders;
//   this.power = power;
//   }
//   printing(){
//     console.log(`${this.name} brand: ${this.brand} cylinders: ${this.cylinders} power: ${this.power}`)
//   }
// }
// class Trucks extends Car{
//   constructor(brand,cylinders,power,loadСapacity){
//     super(brand,cylinders,power);
//     this.name = 'Trucks';
//     this.loadСapacity = loadСapacity;
//   }
//   printing(){
//     console.log(`${this.name} brand: ${this.brand} loadСapacity: ${this.loadСapacity}`)
//   }
// }
// let truck = new Trucks('Volvo',8,315,2000);
// truck.printing()




// Задача 2
// Реализуйте функции конструктор для Student и Aspirant, 
// аспирант отличается от студента наличием некой научной работы.

// Student содержит свойства:

// firstName
// lastName
// group
// averageMark (содержащую среднюю оценку).
// Aspirant имеет дополнительное свойство work

// Создать метод getScholarship() для Student, который возвращает сумму стипендии.
//  Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.

// Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.

// Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant. 
// Вызвать метод getScholarship() для каждого элемента массива.


class Student {
  constructor(firstName, lastName, group, averageMark) {
      this.name = 'Student';
      this.firstName = firstName;
      this.lastName = lastName;
      this.group = group;
      this.averageMark = averageMark;
  }
  getScholarShip() {
      if (this.averageMark === 5) { return 100 }
      else { return 80 }
  }

}

class Aspirant extends Student {
  constructor(firstName, lastName, group, averageMark, work) {
      super(firstName, lastName, group, averageMark);
      this.name = 'Aspirant';
      this.work = work;
  }
  getScholarShip() {
      if (this.averageMark === 5) { return 200 }
      else { return 180 }
      
  }
}

let student1 = new Student("Ania", "Smit", 112, 6);
let student2 = new Student('Jack', 'Luis', 54, 2);
let student3 = new Student('Julia', 'Stone', 100, 8);
let students = [student1,student2,student3];
students.forEach(s => console.log(s.getScholarShip()))


let aspirant1 = new Aspirant("Ania", "Smit", 112, 6,'history');
let aspirant2 = new Aspirant('Jack', 'Luis', 54, 2, 'nature');
let aspirant3 = new Aspirant('Julia', 'Stone', 100, 8, 'helth');
let aspirants = [aspirant1,aspirant2,aspirant3];
aspirants.forEach(a => console.log(a.getScholarShip()))

