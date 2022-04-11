// Задача 1

// Объект Покупатель:

// Фамилия,Имя,Отчество,Адрес,Номер кредитной карточки,Номер банковского счета;
// Создать массив из 5 покупателей.
// Вывести список покупателей в алфавитном порядке
// Вывести покупателей, у которых номер кредитной карточки находится в заданном диапазоне. 
// (между 2 числами, задаете вы сами или спрашиваете через prompt)

function Customer(fio,adress, creditCardNumber, bankAccountNumber){
  this.fio = fio;
  this.adress = adress;
  this.creditCardNumber = creditCardNumber;
  this.bankAccountNumber = bankAccountNumber;

  this.show = function(){
    console.log(`ФИО : ${this.fio}, Адрес : ${this.adress}, Номер кредитной карточки : ${this.creditCardNumber}, Номер банковского счета : ${this.bankAccountNumber}.`);

  };
}
const customer1 = new Customer('Smirnov D.S.','Moscovscaia,51', 5943678126859426, 86598723498356723198);
const customer2 = new Customer('Diatlov O.E.','Sovetskaia,12', 5778622194463875, 55483321689547329548);
const customer3 = new Customer('Pusico E.A.','Leningradskaia,6', 3321598116734982, 24655792318654973159);
const customer4 = new Customer('Laboda S.T.','Fokina,33', 2248756119863447, 3495726541983248791);
const customer5 = new Customer('Groskaia D.S.','Moscovscaia,71', 6785164423115894, 54387684299746185123);

const customers = [customer1,customer2,customer3,customer4,customer5];

const allCust = customers.sort((c1,c2) => c1.fio - c2.fio);/*почему отсортировались не фио а пункты fio,adress, creditCardNumber, bankAccountNumber*/
console.log(allCust);

const firstNumb = 3364985167895426;
const secondNumb = 5967841135694223;

const filterNumb = customers.filter();
console.log(filterNumb);

// Вывести список покупателей в алфавитном порядке





// Задача 2 Аквариум

// Опишите объект fish
// имя,цвет,хищник (да или нет),размер,скорость
// Опишите объект aquarium

// массив рыбок
// вывод списка рыбок Name: Имя, Color: Цвет, Size: размер, Speed: скорость, Predator: (да или нет) (соответсвенно)
// добавление рыбок
// смерть рыбки по имени
// вывод всех рыбок чья скорость выше определенной
// вывод только хищных рыб
// сортировка рыбок по имени
// сортировка рыбок по размеру

function Fish(name, color, size, speed, predator){
  this.name = name;
  this.color = color;
  this.size = size;
  this.speed = speed;
  this.predator = predator;

  this.print =function(){
    console.log(`Name: ${this.name}, Color: ${this.color}, Size: ${this.size}, Speed: ${this.speed}, Predator: ${this.predator}`);
  };
}
  
function Aquarium(fishes = []){
    this.fishes = fishes;

    this.showAllFish = function(){// список рыбок
      this.fishes.forEach(f => f.print());
      console.log('--------');
    };

    this.addFish = function(fish){// добавление рыбок
      this.fishes.push(fish);
    };

    this.deathFish = function(name){// смерть рыбки по имени
      this.fishes = this.fishes.filter(f => f.name !== name);
    };

    this.speedFish = function(){// все рыбки чья скорость выше определенной
      this.fishes = this.fishes.filter(f => f.speed >= 10);
    };

    this.onlyPredator = function(){// только хищные рыбы
      this.fishes.filter( f => f.predator = 'yes');
    };

    this.sortFishName = function(){// сортировка рыбок по имени
      this.fishes.sort((f1,f2) => {
        if(f1.name > f2.name){
          return 1;
        }else if(f1.name < f2.name ){
          return -1;
        }
        return 0;
      })
    };

    this.sortFishSize = function(){// сортировка рыбок по размеру
      this.fishes.sort((f1,f2) => f1.size - f2.size );
    }
}


const fish1 = new Fish('name1','blue',10,5,'no');
const fish2 = new Fish('name2','green',8,4,'no');
const fish3 = new Fish('name3','red',12,18,'yes');
const fish4 = new Fish('name4','yellow',9,15,'yes');
const fish5 = new Fish('name5','black',6,10,'no');


const fishes = [fish1,fish2,fish3,fish4,fish5];

const aquarium = new Aquarium(fishes)
// aquarium.showAllFish();// вызов списка рыбок

const fish6 = new Fish('name6','orange',12,19,'yes');// добавляем рыбку
aquarium.addFish(fish6);// вызов фунуции добавления рыбки


aquarium.deathFish('name4');// вызов функции смерть рыбки по имени
// aquarium.showAllFish();

aquarium.speedFish();// вызов функции все рыбки чья скорость выше определенной
// aquarium.showAllFish();

aquarium.onlyPredator();// вызов функции только хищники
// aquarium.showAllFish();

aquarium.sortFishName();// вывод функции сортировка рыбок по имени
// aquarium.showAllFish();

aquarium.sortFishSize();// вывод функции сортировка рыбок по размеру
// aquarium.showAllFish();