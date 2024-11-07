// Task 1
const global = 5;

function oneBlock() {
  const one = 10;
  console.log(global);
  console.log(one);

  function twoBlock() {
    const two = 15;
    console.log(global);
    console.log(one);
    console.log(two);
  }

  twoBlock();
}

oneBlock();

// Task 2
const a = 5;
blockOne();  
function blockOne() {
  const b = 10;
  console.log(a);
  console.log(b);

  function blockTwo() {
    console.log(a);
    console.log(b);
    // console.log(c);
    const c = 15;
  }

  blockTwo();
}




// block1()

const block1 = function () {
  const d = 20;
  console.log(a);
//   console.log(n);

  const block2 = function () {
    console.log(a);
    console.log(d);
    console.log(n);
    const n = 25;
  };

  block2();
};

// Коли ми робимо функцію, то вона доступна у всьому коді, а функціональний вираз ми робимо
// через змінну, і коли ми намагаємося викликати вище ніж оголосили, то змінна не містить функцію,
// ми присвоємо змінній функцію, і до оголошення воно містить undefinedм

// Task 3
function varVariable() {
    console.log("Var");
    console.log("До оголошення:", initialVar); // undefined

    var initialVar = "Var!";
    console.log("Після оголошення:", initialVar); // Var!

    if (true) {
        var insideBlockVar = "Всередині блоку!";
        console.log("В блоці:", insideBlockVar);
    }

    console.log("Поза блоком:", insideBlockVar); // Доступна поза блоком
}

varVariable();

console.log("\n");

function letVariable() {
    console.log("Let");

    // console.log(initialLet); // Error

    let initialLet = "Let!";
    // console.log("Після оголошення:", initialLet); // Let!

    if (true) {
        let insideBlockLet = "Всередині блоку!";
        console.log("В блоці:", insideBlockLet);
    }

    // console.log("Поза блоком):", insideBlockLet); // Error
}

letVariable();

console.log("\n");

function constVariable() {
    console.log("Const");

    // console.log(initialConst); // Error

    const initialConst = "Const!";
    console.log("initialConst:", initialConst); // Const!

    // initialConst = "Спроба змінити константу"; // Error

    if (true) {
        const insideBlockConst = "Const в блоці!";
        console.log("В блоці:", insideBlockConst);
    }

    // console.log("Поза блоком:", insideBlockConst); // Error
}

constVariable();

// var має глобальну або функціональну область видимості, тому вона буде викликатися поза блоком
// let і const мають блочну видимість їх поза блоком не видно тому вони не підлягають hoisting 


function outer() {
    let x = 10;
 
    function inner() {
       let y = 5;
       return x + y;
    }
 
       return inner;
    }
 
    const closureFunc = outer();
    const result = inner();