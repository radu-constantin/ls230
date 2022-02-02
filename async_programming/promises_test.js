let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('fail');
    }, 1500)
})

promise.then((success) => {
    console.log(success);
}, (fail) => {
    console.log(fail);
})

setTimeout(() => {
    console.log('miau');
}, 1000);

console.log('first');