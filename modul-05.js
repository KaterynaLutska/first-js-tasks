// задача 1 // 

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
//     this.getInfo = function() {
//     return `login : ${this.login}, email: ${email}`;
//     }
//   }
  
//  Account.prototype.getInfo = function () {
//   }

// console.log(typeof Account.prototype.getInfo);
// // 'function'
// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// // 'login : Mangozedog, email: mango@dog.woof'
// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com's


// ------ 2 ------- задача 


// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: 
// User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers */

// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(name, age, followers) {
//        return (`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
        
//     }
// }


// ------ 3 -------- задача 

/* использование методов класса
Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
При вызове будет получать один аргумент - начальный массив товаров, 
и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получает товар и, если он есть, удаляет его из текущих
*/

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//        return this.items;
//     }
//     addItem(item) { 
//         return this.items.push(item)
//         }
//     removeItem(item) {
//         return this.items.splice(1,1)
//      }
// }



// ------------- 4 задача ---------------

/*
переиспользование методов класса
Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
Метод pad должен использовать методы append и prepend
*/


// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value = this._value + str;
//     }
//     prepend(str) {
//         this._value = str += this._value;
//     }
//     pad(str) {
//         this.append(str);
//         this.prepend(str)
//     }
// }


//  console.log(typeof StringBuilder);
// // // 'function'
//  const builder = new StringBuilder('.');
//  builder.append('^');
//  console.log(builder.value); // '.^'

//  builder.prepend('^');
//  console.log(builder.value); // '^.^'

//  builder.pad('=');
//  console.log(builder.value); // '=^.^='







// ------------ 5 задача ----------------

/* 
Напиши класс Car с указанными свойствами и методами.

class Car {
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   
  constructor() {}

  /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   
  turnOn() {}

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   

turnOff() { }

  /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   
  accelerate(value) {}

  /*
   * Этот метод должен отнимать 
   * от свойства `speed` 
   * полученное значение, при условии, 
   * что результирующая скорость не меньше 0
   

  decelerate(value) {}

  /*
   * Этот метод должен добавлять к свойству 
   * `distance` пробег в километрах, 
   * т.е. hours * speed,
   * но только в том случае, 
   * если машина заведена!
   
  drive(hours) {}
}

#### Пример 1.

```js
class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    /* параметр name не должен 
     *   совпадать с названием свойства
     *   но должен быть похож.
     *   Поэтому используют прием смены
     *   названия добавляя символ '_'.
     *   Хотя это может любой другой символ
     
    this._name = name;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
*/

// class Car {
//     static getSpecs(car) { 
//          return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//      }
//     constructor(obj) {
//         this.maxSpeed = obj.maxSpeed;
//         this.speed = 0;
//         this.isOn = false;  
//         this.distance = 0;
//         this._price = obj.price;
//     }
//     get price() {
//         return this._price;  
//      }
//     set price (value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//      }
//     turnOff() { 
//         this.isOn = false
//         this.speed = 0;
//         }
//     accelerate(value) {
//         if (this.speed + value <= this.maxSpeed) {
//             this.speed = value + this.speed;
//         }
//         return this.speed
//     }
//    decelerate(value) {
//        if (this.speed - value > 0) {
//           this.speed = this.speed - value;
//         }   
//        else if (value + this.speed > 0) {
//          this.speed = 0;
//        }
//     }
//     drive(hours) {
//         if ( this.isOn = true) {
//             this.distance += this.speed * hours;
//         }
//      }
// }
 
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(mustang);

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

