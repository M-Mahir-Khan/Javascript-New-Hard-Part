// Introduction Asynchonility

function display(data){
    console.log("hello");
};


const dataFromAPi = fetchAndWait("https://twitter.com/will/tweets/1");

display(dataFromAPi);

console.log("Me later");