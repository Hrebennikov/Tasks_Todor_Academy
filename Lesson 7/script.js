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
<<<<<<< HEAD

const arr3 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ];

  let length = arr3.length
  
  for (let i = 0; i < length; i++) {
    if (arr3[i] % 2 === 0) {
      console.log(`Число ${arr3[i]} парне`);
    } else {
      console.log(`Число ${arr3[i]} непарне`);
    }
  }
  
=======
>>>>>>> 201bd3332d62e6dc30bb7e2d9b9a7211dda1c371
