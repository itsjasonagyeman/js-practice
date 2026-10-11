const numbers = [1, 2,3 ,4 ,5];

const doubled = numbers.map((n) => n*2);
const big = numbers.filter((n) => n> 2);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(doubled);
console.log(big);
console.log(total);
console.log(numbers);