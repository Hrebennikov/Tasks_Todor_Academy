// Task 1
function calculateArea (width, height) {
    return width * height
}

console.log(calculateArea(10, 5)); 

// Task 2
function printMessage(message) {
    console.log(message);
}

function sendMessage(message, callback) {
    // Якщо просто виклакати callback пише is not function at sendMessage
    // знайшов така рішення, не знаю чи це правильно, але працює
    if (typeof callback === "function") {
        callback(message);
    } 
}

sendMessage("Hello, world!", printMessage);
sendMessage("I'm Valerii", printMessage);
sendMessage("I am a Front-end developer", printMessage);


//  Task 3
const Myfunction = function (num) {
    console.log(num * num);
  };

  Myfunction(4);
  Myfunction(10);
  Myfunction(13);

  function checkOnNumber(number) {
    if (typeof number === "number") {
        console.log(`${number} - це число`);
    } else {
        console.log(`${number} - це не число`);
    }
  }

checkOnNumber(5)