// Task 1
const arr = [2, 6, 5, 3, 9, 10, 22, 35, 66, 1];
const filter = arr.filter((num) => num % 2 == 0);
console.log(filter);

// Task 2
const sum = arr.reduce((acc, num) => acc + num);
console.log(sum);

// Task 3
function replaceWords(input, target, replacement) {
    return input.replace(target, replacement)
}

let input = "I'm Valrii Grebеnnikov";
let target = "Grebеnnikov";
let replacement = "Hrebеnnikov";

const output = replaceWords(input, target, replacement);

console.log(output);

// Task 4
function curry(x) {
    return function(y) {
        return x * y;
    };
}

console.log(curry(5)(15));

// Task 5
function accumulator() {
    let count = 0;
    return function() {
        count++
        return count
    };
}

const counter = accumulator();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());