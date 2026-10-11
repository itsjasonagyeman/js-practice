const students = [
  { name: "Ama", score: 78 },
  { name: "Kofi", score: 45 },
  { name: "Esi", score: 92 },
  { name: "Yaw", score: 60 },
  { name: "Abena", score: 38 }
];

const avgScore = (students.reduce((sum, n) => sum + n.score, 0))/students.length;
const passStudents = students.filter((n) => n.score >= 50).map((n) => n.name);
const topScorer = students.reduce((best, n) => best.score < n.score ? n : best, students[0]);

console.log(avgScore);
console.log(passStudents);
console.log(topScorer.name);