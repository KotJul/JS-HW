// дз 01.02.22

// Задача 1 Описать объект, представляющий треугольник. 
// Предусмотреть методы для создания объектов, вычисления площади и периметра
function Triangle(a,b,c){
  this.a = a;
  this.b = b;
  this.c = c;

  this.per = function(){
  return a+b+c;
  };
  this.plosh = function(){
    let polyPer = (a+b+c) / 2;
    console.log(polyPer);
    return Math.sqrt (polyPer * ((polyPer - a) * (polyPer - b) * (polyPer- c)));
  };
}

let Triangle1 = new Triangle(3,4,6);
let perimetr = Triangle1.per();
let ploshad = Triangle1.plosh();

console.log(perimetr);
console.log(ploshad);






// Задача 2 Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.
// Ввести данные в массив из пяти элементов типа train
// Упорядочить элементы по номерам поездов.
// Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массив по пункту назначения, (* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)

function Train(destinationName, trainNumber,departureTime){
  this.destinationName = destinationName;
  this.trainNumber = trainNumber;
  this.departureTime = departureTime;

  this.print = function(){
    // информация о поезде
    console.log(this.trainNumber + ' -  ' + this.destinationName + ' -  ' + this.departureTime);  
  }
  
};
let train1 = new Train('Minsk', 123, 1230);
let train2 = new Train('Pinsk', 164, 1700);
let train3 = new Train('Gomel', 48, 1320);
let train4 = new Train('Vitebsk', 112, 1450);
let train5 = new Train('Slonem', 150, 1025);

let trains = [train1,train2,train3,train4,train5];

let sortedTrainByNumber = trains.sort((t1,t2) => t1.print() - t2.print());/*просто выводит данные о поездах но не сортирует почему??*/
console.log(sortedTrainByNumber);

let chooseTrain = prompt('Введите номер поезда');
let printChooseTrain = trains.filter();
console.log(printChooseTrain);



