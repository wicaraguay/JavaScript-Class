// const product_name = 'SmartPhone'
// const price = 499
// const brand = 'TechCo'

// function getProductDetails(){
//     const product_Name = 'Laptop'
//     const price = 899

//     return `The ${product_Name} costs $${price} and is from the brand ${brand}`
// }

// console.log(getProductDetails())


//Context global
const product_name = 'SmartPhone'
const price = 499
const brand = 'TechCo'

function getProductDetails(){
    //Context local
    const product_name = 'Laptop'
    const price = 899

    return `The ${product_name} costs $${price} and is from the brand ${brand}`
}

console.log(`This ${product_name} costs $${price} and is from the brand ${brand}`)