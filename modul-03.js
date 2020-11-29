/* -- 2 --- задача 
Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

Циклы не должны использоваться */

// const countProps = function (obj) {
//   "use strict";
//   let props = Object.keys(obj).length;
//   return props;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5


/* -- 3 --- задача 

Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). Сотрудники и кол-во выполненных задач 
содержатся как свойства объекта в формате "имя":"кол-во задач". */

// const findBestEmployee = function (employees) {
//   "use strict";
//   let bestValue = 0;
//   let bestKey = "";

//   for (const [key, value] of Object.entries(employees)) {
//     if (bestValue < value) {
//       bestValue = value;
//       bestKey = key;
//     }
//   }
//     return `${bestKey}: ${bestValue}`;
// }

/* -- 4 -- задача 
Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// const countTotalSalary = function (employees) {
//   "use strict";
//   let totalSalary = 0;
//   for (const value of Object.values(employees)) {
//     totalSalary = totalSalary += value;
//   }
//   return totalSalary;

//   // Write code under this line
// };


/* -- 5 -- задача 

Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства 
prop из каждого объекта в массиве.

Используй метод push для добавления значения в массив 
и оператор in для проверки наличия свойства в объекте. */

// function getAllPropValues(array, prop) {
//   "use strict";
//   const arrayProduct = [];
//   for (const product of products) {
//     if (product[prop] !== undefined) {
//       arrayProduct.push(product[prop]);
//     }
//   }

//   return arrayProduct;
// }

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   let message = [];
//   for (const object of array) {
//     if (prop in object) {
//       message.push(object[prop]);
//     }
//   }

//   return message;
// }


/*  -- 6 --- задача 


Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта 
(значение свойства name). 
Возвращает общую стоимость продукта (цена умноженная на количество).

Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800 */


// function calculateTotalPrice(array, prop) {
//   "use strict";
//   let totalPrice = 0;
//   for (const product of array) {
//     if (prop === product.name) {
//       totalPrice = product.price * product.quantity + totalPrice;
//     }
//   }
//   return totalPrice;
// }

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
//function arr ()

