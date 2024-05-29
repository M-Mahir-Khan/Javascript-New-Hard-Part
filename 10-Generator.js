function createFlow(array){
    let i = 0;
    const inner = {next:
        function(){
            const element = array[i]
            i++
            return element
        }

    }
    return inner
}

const returnNextElement = createFlow([4,5,6]);
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();

