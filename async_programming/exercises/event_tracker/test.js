/* 
Implement a function that tracks events on a web page by wrapping a callback function in a function that add each event to a tracker object before invoking the callback.
The function should take a callback function as an argument and return a new function that:
    - records the event, if the specific event, hasn't been recorded before;
    - executes the original callback function;
*/

function track(callback) {
    console.log('')
}

let divRed = document.getElementById('red');

divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
}));