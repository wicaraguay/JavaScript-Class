// Capacidades que tienen las funciones

//1. Pasar funciones como argumentos -> callback

function a (){}
function b (a){}
b(a)

//Retornar funciones 

function a(){
    function b (){}
    return b
}

//Asignar funciones a variables -> expresion de funcion
const a = function(){}

//Tener propiedades y metodos

function a (){}

const obj = {}

a.call(obj)

//Anidar funciones -> Nested functions

function a(){
    function b(){
        function c (){

        }
        c()
    }
    b()
}
a()


// Es posible almancenar funciones en objetos?


const rocket = {
    name : 'Falcon 9',
    launchMessage : function launchMessage (){
        console.log('fuego')
    }
}

rocket.launchMessage()
