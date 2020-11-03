
/* - 1 - задача //

Напиши функцию getItemsString(array), 
которая получает массив и возвращает строку, 
полученную из объединения (конкатенации) строк 
в формате ${номер элемента} - ${значение элемента}\n , 
где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. 
К примеру для первого элемента массива 
['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 
'1 - Mango', а для индекса 2 выведет '3 - Ajax'.
Используйте вспомогательную переменную result 
для добавления (конкатенации) строк внутри цикла for 
*/

// let result = "";
// const getItemsString = function (array) {
//     for (let i = 0; i < array.length; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`
//     }
    
//     return result
// };


/*  - 2 - задача // 

Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) 
принимающую строку (в строке будут только слова и пробелы) 
и цену гравировки одного слова, 
и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. 
Т.е. никаких for, while, do while, for of, for in, forEach 
или функциональных методов.

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord = pricePerWord * message.split(' ').length;// Write code in this line

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

/* - 3 - задача / 

Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), 
которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает 
самое длинное слово в этой строке.
*/

// function findLongestWord(string = "") {
//     let theLongestWord = "";
//     let strings = string.split(" ");
//     for (let word of strings) {
//         if (word.length > theLongestWord.length) {
//             theLongestWord = word;
//             }
//     }
//     return theLongestWord
// }

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumpe

/* - 4 - задача / 

Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) 
которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, 
функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает 
строку до размера maxLength символов и добавляет 
в конец строки троеточие ..., после чего возвращает укороченную версию.

function formatString (string, maxLength = 40) {
    if (string.length <= maxLength) {
        return string;
    }
    else {
        return `${string.slice(0, maxLength)}...`
    }
}
// коротка версія // 
function formatString(string, maxLength = 40) {
   return string.length <= maxLength ? string : `${string.slice(0, maxLength)}...`
}

// /* - 5 - задача / 

Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), 
принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли запрещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре

function checkForSpam (str) {  
    let string = str.toLowerCase();
  return string.includes('sale') || string.includes('spam') ? true : false
}
aбо 
function checkForSpam (str) {  
  return str.toLowerCase().includes('sale') || str.toLowerCase().includes('spam') ? true : false
}

console.log(checkForSpam('Latest technology news')); // false


/* - 6 - задача / 

Создание нового массива на основе преобразования 
данных из старого массива
Напиши функцию mapArray(array), 
принимающую 1 параметр array - массив чисел. 
Функция создает новый массив numbers размером 
в длину массива array и заполняет его числами 
из массива array умноженными на 10. 
Для перебора массива и добавления новых значений используй цикл for. 
По завершению перебора массива array возвращается массив numbers.

function mapArray(array) {
  'use strict';
    const numbers = new Array(array.length);
    for (let i = 0; i < array.length; i += 1) {
        numbers[i] = array[i] * 10;
  }
  return numbers;
}
console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]


/* - 7 - задача / 

Создание нового массива на основе отбора из исходного массива
Напиши функцию filterArray(array), 
принимающую 1 параметр array - массив. 
Функция проверяет каждое значение массива - 
является ли значение конечным числом (Number.isFinite). 
Для проверки используй цикл for. 
Числа добавляются в новый массив numbers с помощью метода push, 
а не числа - игнорируются. 
По завершению проверки массива array возвращается массив numbers.

function filterArray(array) {

  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
      if ( Number.isFinite(array[i])) {
       numbers.push(array[i])
      }
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]


/* - 8 - задача / 

Вычисление суммы массива
Напиши функцию reduceArray(array), которая принимает числовой массив array. 
Если массив array не пустой, необходимо посчитать сумму всех элементов массива, 
используя цикл for.
Для подсчета суммы используй переменную total. 
Функция должна возвращать 0 если массив пустой и значение total в противном случае.

function reduceArray(array) {
    let total = 0;
        for (const element of array) {
            if (array.length > 0)
            total = total += element
    } 
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0



// - задача 9 //


/* Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins */

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = ((login, min = 4, max = 16) =>
//     login.length >= min && login.length <= max ? true : false); // повертає true, якщо проходить умовуж
// const isLoginUnique = ((allLogins, login) =>
//     !allLogins.includes(login)) // повертає true, якщо проходить умову

// function addLogin(allLogins, login) {
//         const SUCCESS = 'Логин успешно добавлен!';
//         const REFUSAL = 'Такой логин уже используется!';
//         const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//         let message;
//         if (isLoginValid(login) === false) {
//             return ERROR
//         }
//         else if (isLoginUnique(allLogins, login) === false) {
//             return REFUSAL
//         }
//         else {
//             allLogins.push(login)
//             return message = SUCCESS
//         }
//     }

//  console.log(addLogin(logins, 'Ajax')); 
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles')); 
// // 'Такой логин уже используется!'

//  console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

//  console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// // 'Ошибка! Логин должен быть от 4 до 16 символов' 