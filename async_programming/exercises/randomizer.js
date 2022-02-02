function callback1() {
    console.log('callback1');
  }
  
  function callback2() {
    console.log('callback2');
  }
  
  function callback3() {
    console.log('callback3');
  }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizer(...callbacks) {
    let counter = 1;
    let maxTime = callbacks.length * 2;

    let countID = setInterval(() => {
        console.log(counter);
        counter += 1;
        
        if (counter > maxTime) clearInterval(countID);
    }, 1000);


    callbacks.forEach((callback, index) => {
        setTimeout(() => callback(), getRandomIntInclusive(1, maxTime) * 1000);
    })
}

randomizer(callback1, callback2, callback3);