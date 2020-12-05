// 1 задача // написати функцію, яка повертатиме ім'я та кількість друзів у певному алгоритмі 
// function likes(names) {
//     if (names.length === 0) {
//         return 'no one likes this'
//     }
//     else if (names.length === 1) {  
//         return names + ' likes this'
//     }
//     else if (names.length === 2) {
//             return `${names[0]} and ${names[1]} like this`
//         } 
//     else if (names.length === 3) {
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`
//         }
//     else {
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//         }
// }

// 2 рішення з codewars //

// function likes(names) {
//   return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`, 
//     2: `${names[0]} and ${names[1]} like this`, 
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//   }
//   [Math.min(4, names.length)]
// }

// console.log((likes([])));  //'no one likes this'));
// console.log((likes(['Peter'])));  //'Peter likes this'));
// console.log((likes(['Jacob', 'Alex']))); //'Jacob and Alex like this'));
// console.log((likes(['Max', 'John', 'Mark']))); //'Max, John and Mark like this'));
// console.log((likes(['Alex', 'Jacob', 'Mark', 'Max', 'Nesd']))); //'Alex, Jacob and 2 others like this');

// 1 варіант // 

// function findOdd(A) {
//     let x = 0;
//     for (let i = 0; i <= A.length; i++) {
//         x = x ^ A[i]
//     }
//         console.log(x);
// }
    // 2 варіант //
// function findOdd(A) {          
//   for(var i = 0; i < A.length; i++){  
//       if ((A.filter
//               (function (item)
//       { return item == A[i]; }
//           )
//       ).length % 2 != 0)
      
//       {
//       return A[i];
//     }
//   }
// //   return 0;
// }

//console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5));
//console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
//console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
//console.log(findOdd([10], 10));
//console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
//console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));

// const expandedForm = n =>
//     n.toString()
//         .split('')
//         .reverse()
//         .map( (a, i) => a * Math.pow(10, i))
//         .reverse()
//         .filter((a) => a !== 0)
//         .join(' + ')
    
// console.log(expandedForm(2)); // '10 + 2'));
// console.log(expandedForm(42));// '40 + 2'));
// console.log(expandedForm(354));// '300 + 4')
// console.log(expandedForm(7304));// '7000 + 300 + 4')
// console.log(expandedForm(70304));// '70000 + 300 + 4')

// 4 задача // 
// function adjacentElementsProduct(array) {
//     return Math.max(...array.map((a, i) => a * array[i + 1])
//         .slice(0, array.length - 1))
// }
  
// console.log(adjacentElementsProduct([5, 8])) //, 40);
// console.log(adjacentElementsProduct([1, 2, 3])) //, 6);
// console.log(adjacentElementsProduct([1, 5, 10, 9])) // , 90);
// console.log(adjacentElementsProduct([4, 12, 3, 1, 5])) // , 48);
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])) //, 6);

// Прміняємо Math для масиву
//.filter((a, b, c) => a === Math.max(...c))
        //.join(Number())

// 5 задача // поверне всі значення цифр, які лежать між двома іншими/ 

// function between(a, b) {
//     let bet = []
//     for (a; a <= b; a++) {
//         bet.push(a)
//     }
//     return bet
// }

// console.log(between(10, 15));

// ---------- 6 задача ------------

// function calculateTip(amount, rating) {
//     let ratings = rating.toLowerCase();
//     let tip = "Rating not recognised"

        
//         switch (ratings) {

//             case "excellent":
//             tip = Math.round(amount * 0.2);
//             break;

//             case "great":
//                 tip = Math.round(amount * 0.15);
//                 break;
            
//             case "good":
//            tip = Math.round(amount * 0.1);
//             break;
//               case "poor":
//             tip = Math.round(amount * 0.05);
//                 break;
        
//             case "terrible":
//             tip = 0
//             break;

//         }
//     return tip
// }

// // 2 варіант //
// const TIPS = {
//   "terrible": 0.0,
//   "poor": 0.05,
//   "good": 0.1,
//   "great": 0.15,
//   "excellent": 0.2
// };

// const calculateTip = (amount, rating) => {
//   rating = rating.toLowerCase();
  
//   return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
// };


// console.log(calculateTip(20, "Excellent"))//, 4);
// console.log(calculateTip(26.95, "good"))//, 3);
// console.log(calculateTip(26.95, "terdfdrible"))//, 3);

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%


// ----------  7 задача -----------
// моє рішення // 

// function well(x) {
//     let g = 0;
//     for (let a of x) {
//         if (a === 'good') {
//             g = g +1 
//         }
//     }
//     return g < 1 ? "Fail!" : g < 3 ? "Publish!" : 'I smell a series!'; 

//  замінила це на тернарний // 
    // if (g >= 1 && g <= 2) {
    //     return "Publish!"
    // }
    // else if (g >= 3) {
    //    return 'I smell a series!'
    // }
    // else return "Fail!"
//}

// чуже рішення // 
// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }


// console.log(well(['bad', 'bad', 'bad']))// 'Fail!');
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))//  'Publish!');
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))//, 'I smell a series!');

// ----- 8 задачка -------
// використання функції за різного значення bool
function _if(bool, func1, func2) {
  return bool = true ? func1() : func2()
}

// --------- 9 задачка ---------

// function multipleOfIndex(array) {
//     const newArray =[]
//     for (let i = 0; i <= array.length; i++)
//         if (array[i] % i === 0 ) {
//       newArray.push(array[i])
//     }
//    return newArray   
// }
// --- чуже рішення // 
// function multipleOfIndex(array) {
//   return array.filter((num, i) => num % i === 0);
// }

//   console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))//, [-6, 32, 25]);
//   console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])) // [-1, 10]);
//   console.log(multipleOfIndex([11, -11]))// [-11]);
//   console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))// [-85, 72, 0, 68]);
//   console.log(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]))// [38, -44, -99]);
//   console.log(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]))// [-49, 8, -60, 35]);


// --------------- 10 задача ---------------

// function bigToSmall(arr) {
//     let newArray = [];
//     for (let i = 0; i <= arr.length; i++) {
//         newArray = newArray.concat(arr[i]).sort((a, b) => b - a)
        
//     }
   
//     return  newArray.join('>').slice(0, arr.indexOf())
// }

// ----------- 2 варіант --------------

// function bigToSmall(arr) {
//     return [].concat(...arr).sort((a, b) => b - a).join('>')
// }

// console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]))//
// console.log(bigToSmall([[1, 3, 5], [2, 4, 6]])) //"6>5>4>3>2>1");
// console.log(bigToSmall([[1, 1], [1], [1, 1]])) //"1>1>1>1>1");
    

// --------- приклад ---------- повертає алфавіт -------------

// let results="";
// for (let i=0;i<26;i++) 
// results+=String.fromCharCode(97+i);
// console.log(results)   //output: abcdefghijklmnopqrstuvwxyz
// //use join() method:

// const cache=[];
// for (let i=0;i<26;i++) cache[i]=String.fromCharCode(97+i);
// const result=cache.join("");
// console.log(result)   //output: abcdefghijklmnopqrstuvwxyz


// ----------- приклад змішаний масив -----------------
// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];
// const result = arr1.map(x => x * x).reduce((a, b, i, ar) => a.concat(ar[i], arr2[i]), [])
// console.log(result); //output: [ 1, 6, 4, 7, 9, 8, 16, 9, 25, 10 ]



// --------- 11 задача --------------

function tailAndHead(arr) {
    let array = [];
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(Number(arr[i].toString()[arr[i].toString().length - 1]))
        console.log(+ Number(arr[i + 1].toString()[0]))
    }
    return array.reduce( (a, b ) => a * b)
}



// function tailAndHead(arr){
//   //coding here...
//   let somme = [];
//   for (let i = 0; i<arr.length-1; i++) {
//   somme[i] = Number(arr[i].toString()[arr[i].toString().length-1])
//       + Number(arr[i+1].toString()[0]);
// }
  
//   return somme.reduce( (accu,current) => ( accu*current) );;
// }

 //console.log(tailAndHead([123,456,789,12,34,56,78]))// , 532350);
 console.log(tailAndHead([1,2,3,4,5]))// , 945);
 //console.log(tailAndHead([111,2345,66,78,900]))//, 7293);
// console.log(tailAndHead([35456,782,569,2454,875]))// , 12012);
   