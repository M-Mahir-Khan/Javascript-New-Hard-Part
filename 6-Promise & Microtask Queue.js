// Promise & Microtask Queue

function display(data){console.log(data)};
function printHello(){console.log("hello")};
function blockFor300ms(){/* block Js thred for 300ms with long for loop*/}

setTimeout(printHello,0);

const futureData = fetch("https://twitter/Will/tweets/1");

futureData.then(display);

blockFor300ms();

console.log("me first");


// console
// "me first"
// "hi"
// "Hello"
