let counterId;

function startCounting() {
    let number = 1;
    counterId = setInterval(() => {
        console.log(number);
        number += 1;
    }, 1000);

    return id;
}

function stopCounting() {
    clearInterval(counterId);
}


