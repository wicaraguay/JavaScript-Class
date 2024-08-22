// funciones puras

// Side effects
//1. Modificar variables globales
//2. Modificar parametros
//3. Llamados a APIs -> Solicitudes http
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual


//Funcion pura
function suma (a, b){
    return a + b
}


//Funcion impura
function suma(a, b){
    console.log('A:', a)
    return a + b
}


//Funcion impura
let total = 0

function sumWithSideEffect(a){
    total +=  a
    return total
}

//Funcion pura
function square(x){
    return x * x
}

function addTen (y){
    return y + 10
}


const number = 5
const finalresult = addTen(square(number))

console.log(finalresult)