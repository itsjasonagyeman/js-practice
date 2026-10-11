const products = [
  { name: "Notebook", price: 15, inStock: true },
  { name: "Pen", price: 2, inStock: true },
  { name: "Backpack", price: 120, inStock: false },
  { name: "Calculator", price: 60, inStock: true }
];

const currentStock = products.filter((p) => p.inStock === true);
const allProducts = products.map((p) => p.name);
const totalValue = products.filter((p) => p.inStock===true).reduce((sum, p) => sum + p.price, 0);
const smallValue = products.filter((p) => p.inStock ===true).filter((p) => p.price < 50).map((p) => p.name); 

console.log(currentStock);
console.log(allProducts);
console.log(totalValue);
console.log(smallValue);