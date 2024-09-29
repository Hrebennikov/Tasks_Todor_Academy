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

// Task 1.2
// Принцип роботи callback це пердача функції як аргумент, 
// виклик після події як основна фунція завершила своє виконання,
// викликається функція callBack

// Важливість асихроності:
// При використанні callBack код не зупиняє поток виконання коду, 
// якщо потрібно звернутись до сервера. 
// При використанні callBack виконня коди буде проходити далі

// Task 1.3
// Ваші пояснення додайте до багаторядкового виводу завдяки template string (``) 
// та виведіть в консоль.

// Task 2
// Task 2.1
// 1) Напишіть функцію sum, яка приймає два числа та колбек-функцію. 
// Функція sum повинна обчислити суму двох чисел та передати результат 
// у колбек-функцію.

function sum(callBack) {
    // console.log(a + b);
    // alert(a + b)
    // const arr = [2, 5]
    // return arr = a + b
    let a
    let b 
    let result = a + b
    // if (callBack == "function") {
    //     callBack(result); 
    // }
    callBack(result); 
}

function resultCallback(elem) {
    Math.random(elem)
    console.log(elem);
}

resultCallback(sum)

// Task 2.2
// 2) Створіть колбек-функцію display(), яка виводить результат обчислення 
// суми на екран.

// function display(callBack) {
//     callBack()
// }

// display(sum)

// sum(2, 3)
// sum(5, 5)
// Task 2.3
// 3) Викличте функцію sum з будь-якими двома числами та передайте створену 
// вами колбек-функцію.