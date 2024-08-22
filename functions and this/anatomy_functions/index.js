function calculateDisconunt (price, disconuntPercentage){

    const discount = (price * disconuntPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;

}

const originalPrice = 100;
const disconuntPercentage = 15;

const finalPrice = calculateDisconunt(originalPrice, disconuntPercentage);

console.log('Original Price: $', originalPrice);
console.log('Discount:', disconuntPercentage , '%');
console.log('Final Price with discount: $', finalPrice);
console.log(typeof calculateDisconunt);
