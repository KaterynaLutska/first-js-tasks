// --------------- 1 задача ---------------

//const getUserNames = array => array.map(function ({name}) { return name });


// //PS Деструктурирующее присваивание (ДП):
// //Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object))
// // 2  ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// // Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2


// ---------------- 2 задача ----------------

//const getUsersWithEyeColor = (array, color) => array.filter(function({eyeColor}){return eyeColor.includes(color)});
//  console.log(getUsersWithEyeColor(users, 'blue'));

// ---------------- 3 задача ---------------

/*

filter, map
Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).

Используй деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.
*/

// // Write code under this line
// const getUsersWithGender = (array, gender) => array.filter((a) => a.gender === gender).map(function ({ name }) { return name });
// // console.log(getUsersWithGender(users, 'male'));

// // 2 варіант//
// const getUsersWithGender = (array, sex) => array.filter(({gender}) => gender === sex).map(({ name }) => name);
// console.log(getUsersWithGender(array, 'male')); 

// // 3 варіант//

// const getUsersWithGender = (array, sex) =>
//    array.filter(({gender}) => gender === sex)  
//     .map(({name}) => name)   


/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */


/// ---------- 4 задача -------------

// const getInactiveUsers = array => array.filter(({ isActive }) => b = !isActive)

//отримати масив не активних користувачів// 

// -------------5 задача --------------
//const getUserWithEmail = (array, mail) => array.find(({ email }) => email === mail);


// -------------- 6 задача ---------------
// /*
// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет (значение свойства age).

// Сравнение, пример

// const x = 13;
// // num больше 10 ?
// const larger = num > 10; // true
// // num меньше 100 ?
// const smaller = 100 > num; // true
// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// //Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */

// const getUsersWithAge = (array, min, max) => array 
//  .filter(({age}) => age > min && age < max)   
//  .map(({name, email}) => ({name, email}) );  

//  console.log(getUsersWithAge(users, 20, 30));

// ----------- 7 задача ---------
//const calculateTotalBalance = array => array.reduce(function (akk, index, { balance }) { return akk + index.balance }, 0);
 

//-----------8 задача ------------- // 

/*
filter, includes и map
Получи массив имен всех пользователей у которых есть друг с заданным именем.

Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы. */


// const getUsersWithFriend = (array, friendName) => array
//     .filter(({friends}) => friends.includes(friendName))
//     .map(({name}) => name );


// ----------- 9 задача --------------

// Write code under this line
const getNamesSortedByFriendsCount = (array) => array =[...array]
.sort((first, next) => (first.friends.length - next.friends.length))
.map(({name}) => (name));
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
