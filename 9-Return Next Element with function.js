function createFunction(array){
    let i = 0;
    function inner(){
        const element = array[i]
        i++
        return element
    }
    return inner
}

const returnNextElement = createFunction([4,5,6]);
const element1 = returnNextElement();
const element2 = returnNextElement();