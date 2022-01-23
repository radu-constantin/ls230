const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

/* <body>
  <header></header>
  <main></main>
  <footer></footer>
</body> */

/*
Implement a function that converts a nested array of nodeNames to nodes.


1. Find a way to iterate recursively through a nested array.
2. All nested array, have 2 elements:
    1. the parent;
    2. the children array;

Every Element is a Parent!
Every Child is a Parent!
*/

const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

let parent;
let children;

function walk(array) {
    if (array.length === 0) return;
    array.forEach(element => {
        if (Array.isArray(element)) {
          walk(element)
        } else {
          parent = document.createElement(element.toLowerCase());
        }
    })
    console.log(parent.tagName);
}

walk(nodes);



// function walk(array) {
//     if (array.length === 0) return;
//     array.forEach(element => {
//         console.log(element);
//         if(Array.isArray(element)) walk(element);
//     })
// }
