// Task 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11, 12, 13, 14, 15);

console.log(numbers);

// Task 2
const colors = ["червоний", "синій", "зелений", "жовтий", "чорний"];

// Find index
let findColorGreen = colors.findIndex(color => color === "зелений");
console.log(findColorGreen);

// Зберіг у змінній щоб у подальшому якщо б задобився цей елемент щоб його використати
let popColors = colors.pop();
console.log(colors);

// Task 3
const fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];
// Це не з Gpt chat, про цей метод я дізнався на одному курсі
const sort = fruits.sort((a, b) => {
    return a[0].localeCompare(b[0])
});

console.log(fruits);

// Join
const joinString = fruits.join(", ");
console.log(joinString);

// Filter
const filter = fruits.filter((value) => {
    return value.length > 5
});

console.log(filter);

// Map
const map = fruits.map((value) => {
    return value.toUpperCase()
});

console.log(map);

// Reduce
const reduce = fruits.reduce((acc, value) => {
    return acc + "-" + value
});

console.log(reduce);
