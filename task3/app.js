const numbers = [4, -5, 3, 0, 11, -3, 0, 5, 7, -8, 1, -2, -1, 8, 13, 0, 0, 6, -4, 1];
let sum = 0;

for (const number of numbers) {
sum += number;
};

const average = sum / numbers.length;
console.log("The average is " + average); 