function printHello(){
    console.log("Hello");
};

function blockFor1Sec(){
    // block in the js thread for 1 sec
};

setTimeout(printHello,1000);

blockFor1Sec();

console.log("Me first");