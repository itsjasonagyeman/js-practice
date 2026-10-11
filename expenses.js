const expenses = [
  { item: "Lunch", amount: 25, category: "food" },
  { item: "Transport", amount: 12, category: "transport" },
  { item: "Data bundle", amount: 30, category: "airtime" },
  { item: "Dinner", amount: 40, category: "food" },
  { item: "Taxi", amount: 18, category: "transport" }
];

const totalSpent = expenses.reduce((sum, n) => sum + n.amount, 0)
const totalFoodExpense = expenses.filter((f) => f.category === "food").reduce((sum, n) => sum + n.amount, 0)
const biggestExpense = expenses.reduce((big, n) => big.amount < n.amount ? n : big)


console.log(totalFoodExpense);
console.log(totalSpent);
console.log(biggestExpense);