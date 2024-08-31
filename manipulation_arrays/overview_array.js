

const number = (1, 2, 3, 4, 5)


// Array literal syntax

const one_number = [4]

const emptyArray = []

const sports = ['soccer', 'tennis', 'rubgy']

const recipeIngredients = [
    'Flour',
    true,
    {
        ingredient: 'Milk',
        quantity: '1 cup'
    },
    false
]

//Acceder a los arrays

// const first_fruits = fruits[0]


//dimension de un array
const fruits = ['apple', 'banane', 'orange'];

const numberOfFruts = fruits.length
console.log(numberOfFruts)


fruits.push('watermelon')
console.log(fruits)


//practical exercise: suma de todos sus elementos

const numberArray = [1,2,3,4,5]
let sum = 0

for (let i=0;i<numberArray.length;i++){
    sum += numberArray[i]
}

console.log(sum)
