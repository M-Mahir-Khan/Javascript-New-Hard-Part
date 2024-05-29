function *createFlow(){
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum
    yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next() // 7