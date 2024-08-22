




function outer_function () {
    let outer_Variable = "I am outer function"
    function inn_function () {
        console.log(outer_Variable)
    }

    return inn_function

}

const closureExample = outer_function()
closureExample()


function createCounter () {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}


const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()


function outer () {
    let message = "Hello, "

    function inner(name) { 
        console.log(message + name)
    }
    return inner
}


const closureA = outer()
const closureB = outer()


closureA("Alicia")
closureA("BOB")