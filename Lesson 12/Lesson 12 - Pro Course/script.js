// Task 1
function calculateDiscount(num) {
  return function (newNum) {
    const a = (num * newNum) / 100;
    const b = newNum - num;

    return {
      a: a,
      b: b,
    };
  };
}

const c = calculateDiscount(10);
const result = c(100);
console.log(result);

// Task 2
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count now is ${count}`);
  }

  return {
    increment,
  }
}

const count1 = createCounter();

count1.increment();
count1.increment();
count1.increment();
count1.increment();
count1.increment();

// Task 3
function createLogger() {
  let string = "";
  return function(newString) {
    return string + newString;
  }
}

const add = createLogger();

console.log(add("Hello World!"));

// Task 4
function generateUniqueId() {
  let id = 0;
  return function() {
    let rand = Math.floor(Math.random() * 100) + 1
    return id + rand;
  }
}

const random = generateUniqueId();

console.log(random());
console.log(random());
console.log(random());

// Task 5
function multiplyBy(x) {
  return function(y) {
    return x * y
  }
}

const results = multiplyBy(200);

console.log(results(22));

