// Task 1
function calculateArea (width, height) {
    return width * height
}

console.log(calculateArea(10, 5)); 

// Task 2
function printMessage (message) {
    console.log(message);
}

printMessage("Hello World!")

function sendMessage (message, callback) {
   callback(message)
}

sendMessage("I'm Valerii");
sendMessage("I am Front-end developer");
sendMessage(printMessage());