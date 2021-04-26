let numbers = [];

for (let i = 2; i <= 20; i++) {
if (i % 2 === 0) {
numbers.push(i);
};
};
numbers = numbers.join(", ")

console.log(numbers); 