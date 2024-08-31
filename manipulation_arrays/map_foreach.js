

 //map()
const numbers = [1,2,3,4,5]

const newArray = numbers.map(num => num*num)

console.log(numbers)
console.log(newArray)



//foreach()
const colors = ['red', 'ping', 'blue']
const iterateColors = colors.forEach(color => console.log(color))


console.log(colors)
console.log(iterateColors)





const temperatureF = [32,68,95, 104,212]
const temperatureC = temperatureF.map(faregnheith => (5/9) * (faregnheith-32))

console.log('T en F', temperatureF)
console.log('T en C', temperatureC)



//suma de elementos en un array

const newnumbers = [1,2,3,4,5]

let sum = 0

newnumbers.forEach(number=> {
    sum += number

})

console.log('Numeros de arreglo', newnumbers)
console.log('Suma de numeros', sum)