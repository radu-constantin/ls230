// let newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Not working');
//     });
// })

// newPromise
//     .then(
//         (successMsg) => {
//             console.log('Promise succeeded!');
//         },
//     )
//     .catch(() => console.log('Captured by catch statement!'))
//     .then(() => console.log('Execution continues'));


let myPromise = new Promise(resolve => {
    console.log('1. Promise started execution');
    setTimeout(() => {
        resolve('2. Promise settled successfully!');
    }, 2000)
})

async function start() {
    let promiseReturnValue = await myPromise;
    console.log(promiseReturnValue);
    console.log('3. Finished');
}

console.log(start());