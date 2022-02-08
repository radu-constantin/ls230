//Custom Synchronous Iterator

// let collection = {
//     a: 10,
//     b: 20,
//     c: 30,
//     [Symbol.iterator]() {
//         let i = 0;
//         let values = Object.keys(this);
//         return {
//             next: () => {
//                 return {value: this[values[i++]], done: i > values.length};
//             }
//         }
//     }
// }

// let iterator = collection[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//Custom Asynchronous Iterator

let collection = {
    a: 10,
    b: 20,
    c: 30,
    [Symbol.asyncIterator]() {
        const keys = Object.keys(this);
        let i = 0;
        return {
            next: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({
                            value: this[keys[i++]],
                            done: i > keys.length
                        });
                    }, 1000);
                });
            }
        };
    }
};

(async function() {
    for await(let element of collection) {
        console.log(element);
    }
})();



