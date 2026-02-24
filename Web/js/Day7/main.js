import {cart} from "./cart.js";

let products = [
    {name: "Laptop", price: 1000, quantity: 2},
    {name: "Phone", price: 500, quantity: 3},
    {name: "Headphones", price: 100, quantity: 5} 
];

let totalPrice = cart(products);
// console.log("Total price of products in cart: $" + totalPrice);


const invoiceLines = products
  .map(products => 
    `${products.name}₹${products.price} x ${products.quantity} = ₹${products.price * products.quantity}`
  )
  .join("\n");

// console.log("Invoice:\n" + invoiceLines);

console.log(`
🧾 SHOPPING CART INVOICE
-------------------------
${invoiceLines}

-------------------------
Total Amount: ₹${totalPrice}
`);