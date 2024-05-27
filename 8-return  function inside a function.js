// Return function inside a function

function createNewFunction(){
    function add2(num){
        return num + 2;
    }
    return add2
}

const newFunction = createNewFunction();
const result = newFunction(3)