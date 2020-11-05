/*  -- 2 -- Callback функция ----

Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, 
а вторым параметром cb - функцию обратного вызова (callback). 
Функция mapArray создает новый массив numbers и заполняет его 
числами из массива array преобразованными функцией cb.

Оформи создание массива numbers нужной длины используя 
new Array () и необходимый аргумент для задания длины, 
равной длине array.

Напиши функцию обратного вызова addIndex , 
которая принимает два параметра - element и index
 и возвращает число - сумму element и index (сложение).

Напиши функцию обратного вызова subIndex , 
которая принимает два параметра - element и index
 и возвращает число - разность element и index (вычитание). */

// const addIndex = (element, index) => (element += index);
// // Write code under this line
// const subIndex = (element, index) => (element -= index);

// function mapArray(array, cb) {
//   "use strict";
//   // Write code under this line
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

/*  -- 2 задача  -- 

const isUniq = (element, index, arr) => arr.indexOf(element) === index;

// true // false
const isEven = (element) => element % 2 === 0; //true / false

function filterArray(array, cb) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    if (cb(element, index, array)) {
      numbers.push(array[i]);
    }
    // Write code under this line
  }
  return numbers;
}

/*  -- 3 задача  -- 

const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  "use strict";
  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
  }
  if (arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  for (i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
    accum = cb(accum, element);
  }
  return accum;
}

const arr = [1, 2, 3, 4, 5];

console.log(reduceArray(arr, add)); // 15
console.log(reduceArray(arr, add, 10)); // 25


/*  -- 4 задача  -- 


const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value; // Write code in this line
  },
  showOrders() {
    return this.orders; // Write code in this line
  },
  addOrder(cost, order) {
    this.balance -= cost; // Write code in this line
    this.orders.push(order); // Write code in this line
  },
};
const copyAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы

account.changeDiscount(0.15);

console.log(account.discount); // 0.15

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']


// --- 5 --- задача 


const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function(itemName, action) {
  const act =  action(itemName);
  const msg =  `Invoking action on ${itemName}`;
  return {act, msg};
};

const invokeAdd = invokeInventoryAction(
  'Medkit',
   inventory.add.bind(inventory) // Write code in this line
);
const arrayAdd = [...inventory.items];
/* 
//console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

//console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']
*/

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory)  // Write code in this line
// );

// const arrayRemove = [...inventory.items];

/* 
//console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

//console.log(arrayRemove);
// ['Knife', 'Medkit']
*/