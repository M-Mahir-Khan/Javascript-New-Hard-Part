console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeOut")
},5000);

fetch("https://api.netflex.com")
.then(function cbF(){
    console.log("CB Netflix");
})

console.log("End");

// Console:
// Start
// End
// CB netflex
// CB SetTimeOut
