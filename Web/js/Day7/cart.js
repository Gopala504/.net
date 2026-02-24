let cart = (products) =>{
    return products
    .map(product => product.price * product.quantity) // sub total for each product
    .reduce((total, price) => total + price, 0); // total price of all products
}

export {cart};