async function createFlow(){
    console.log("Me first");
    const data = await fetch("https://twitter.com/Will/tweets/1")
    console.log(data);
}

createFlow()
console.log("Me second");