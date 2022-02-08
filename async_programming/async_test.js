// Example using .next;

// const collection = {
//     a: 10,
//     b: 20,
//     c: 30,
//     [Symbol.iterator]() {
//         let i = 0;
//         const values = Object.keys(this); //a, b, c;
//         return {
//             next: () => {
//                 console.log(this);
//                 return {
//                     value: this[values[i++]],
//                     done: i > values.length
//                 }
//             }
//         }
//     }
// }

// const iterator = collection[Symbol.iterator]();

// console.log(iterator.next());
// -----------------------------------------------

// const collection = {
//     a: 10,
//     b: 20,
//     c: 30,
//     [Symbol.iterator]() {
//         let i = 0;
//         let values = Object.keys(this);
//         return {
//             next: () => {
//                 return {
//                     value: this[values[i++]],
//                     done: i > values.length
//                 }
//             }
//         }
//     }
// };

// for (const value of collection) {
//     console.log(value);
// }

let array = [1, 2, 3, 4];

console.log(array[Symbol.iterator]().next());
