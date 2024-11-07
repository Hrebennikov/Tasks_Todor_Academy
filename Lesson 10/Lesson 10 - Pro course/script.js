// Task 1
// Task 1.1
// Callback - це функція передана в іншу функцію в якость аргументу, 
// яка викликається по завершенню будь якої дії.
function welcome(name) {
    console.log("Привіт " + name);
    
}

function processUser(callBack) {
    callBack("Valerii")
}

processUser(welcome)


const string = `
Task 1.2
Принцип роботи callback це пердача функції як аргумент, 
виклик після події як основна фунція завершила своє виконання,
викликається функція callBack

Важливість асихроності:
При використанні callBack код не зупиняє поток виконання коду, 
якщо потрібно звернутись до сервера. 
При використанні callBack виконня коди буде проходити далі

Task 1.3
Ваші пояснення додайте до багаторядкового виводу завдяки template string () 
та виведіть в консоль.
`
console.log(string);


// Task 2
// Task 2.1
function sum(a, b) {
    let result = a + b;
    return result 
}

function resultCallBack(callBack) {
    const resultNumber = callBack(12, 2);
    return console.log(resultNumber)
}

resultCallBack(sum)


// Task 2.2
function display(callBack) {
    const resultDisplay = callBack(2, 2)
    return alert(resultDisplay)
}

display(sum)

