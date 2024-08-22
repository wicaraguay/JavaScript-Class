const globalVariable = '😇'

function localOne(){
    console.log('GLOBAL 1: ', globalVariable)
    // console.log('Local 1: ', localVariable)

    function localTwo(){
        const carrot = '🥕'
        console.log('LOCAL 2: ', carrot)
    }

    function localThree (){
        console.log('LOCAL 3: ', carrot)
    }

    localTwo()
    localThree()

}

console.log(localOne())