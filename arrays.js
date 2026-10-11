const fruits = ["mango", "banana", "pawpaw"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("orange");
fruits.pop();
console.log(fruits);

for (const fruit of fruits){
    console.log(`I like ${fruit}`);
}