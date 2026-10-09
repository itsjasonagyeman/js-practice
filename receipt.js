const itemName = "Pen";
const itemPrice = 20;
const itemQuantity = 10;

const subtotal = itemPrice * itemQuantity
const discountRate = 10/100;
const discountAmount = subtotal * discountRate;
const discountTotal = subtotal - discountAmount;
const vatRate = 15/100;
const vatAmount = discountTotal * vatRate
const grandTotal = discountTotal + vatAmount

console.log(`${itemQuantity} x ${itemName} at GHS ${itemPrice} = ${subtotal}. Discount: GHS ${discountAmount}. Discounted Price: ${discountTotal}. VAT: ${vatAmount} Total: GHS ${grandTotal}`)