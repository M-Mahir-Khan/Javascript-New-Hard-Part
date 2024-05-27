// Promeises

function display(data){
    console.log(data);
};

const futureData = fetch("https://twitter/Will/tweets/1")
futureData.then(display);
console.log("me first");

// console:
// "me first"
// "hi"  ( data )