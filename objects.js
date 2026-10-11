const student = {
    name: 'Ama',
    age: 21,
    isEnrolled: true,
    courses: ['Maths', 'Physics']
};

console.log(student.name);
console.log(student["age"]);

student.age = 22;
student.city = "Kumasi";

console.log(student);
console.log(student.courses[1]);