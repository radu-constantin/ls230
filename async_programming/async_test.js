let myPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Executed after 1 second.');
    }, 1000);
})

async function waitFor() {
    let result = await myPromise;
    console.log(result);
}

waitFor();

console.log('End of script.')