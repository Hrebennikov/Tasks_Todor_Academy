// Task 1
// Об'єктно-орієнтоване програмування, структурує програму як набір об'єктів, 
// що містять дані та методи для їх обробки. ООП полегшує моделювання складних систем, 
// сприяє повторному використанню коду завдяки наслідуванню та поліморфізму, а також забезпечує інкапсуляцію, 
// що допомагає зберігати дані захищеними. Недоліки ООП включають складність розуміння а також більшу ресурсоємність 
// при реалізації порівняно з процедурним підходом.

// Task 2
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new Person("Valerii", 23, "Male");
person1.greet();

const person2 = new Person("Victor", 25, "Male");
person2.greet();

console.log(person1, person2);

// Task 3
class Student extends Person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId;
    }

    greet() {
        console.log(`Hello student ${this.name}, id:${this.studentId}`);
    }
}

const student1 = new Student("Volodymyr", "24", "Male", "1234");
student1.greet();
console.log(student1);

// Task 4
class Shape {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculateArea() {
        const area = this.num1 * this.num2;
        console.log(`Площа: ${area}`);
    }
}

class Circle extends Shape {
    constructor(num1, num2) {
        super(num1, num2);
    }

    calculateArea() {
        const area = this.num1 * this.num2;
        console.log(`Площа: ${area}`);
    }

    radius(diameter) {
        const di = diameter / 2;
       return console.log(di);
    }
}

const rad = new Circle(9);
rad.radius(9);
rad.calculateArea()

// Task 5
class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Книга: ${book.name}, автора: ${book.author}, ${book.year} року.`);
    }

    listBooks() {
         for (let key of this.books) {
            console.log(key);
        }
    }
}

const library = new Library();

const book1 = new Book("fdfd", "tr", 2001);
const book2 = new Book("fdfd", "tr", 2002);

library.addBook(book1);
library.addBook(book2)
library.listBooks()

// Task 6
class PC {
    constructor(name, processor, ram) {
        this.name = name;
        this.processor = processor;
        this.ram = ram;
        this.isOn = false;
    }

    ternOn() {
        if (!this.isOn) {
            console.log(`Computer ${this.name} included!`);
            this.isOn = true;
        } else {
            console.log(`Computer  ${this.name} already included!`);
        }
    }
}

class Laptop extends PC {
    constructor(name, processor, ram, monitor, batteryHour) {
        super(name, processor, ram);
        this.monitor = monitor;
        this.batteryHour = batteryHour;
        this.batteryLife = this.processor / (this.monitor * this.ram);
    }
}

class Ultrabook extends Laptop {
    constructor(name, processor, ram, monitor, batteryHour, balance) {
        super(name, processor, ram, monitor, batteryHour);
        this.balance = balance;
    }

    turnOnError() {
        if (this.balance > 4 || this.balance > 2) {
            console.log("Error!!! Your computer exceeds battery hours and weight!");
        } else {
            console.log("Your computer is ready to work!");
        }
    }
}

// PC
const pc = new PC("Samsung", 150, 16);
console.log(pc);
pc.ternOn();

// Laptop
const laptop = new Laptop("Hp", 100, 16, 13, "6 hour");
console.log(laptop);
laptop.turnOn();

// Ultrabook
const ultrabook = new Ultrabook("Asus", 120, 8, 13, 2);
console.log(ultrabook);
ultrabook.turnOnError();

// Task 7
class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old!`);
    }
}

class Developer extends Human {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    codding(hours) {
        console.log(`I am codding on ${this.skill} ${hours} hours per day.`);
    }
}

class TeamLead extends Developer {
    constructor(name, age, skill) {
        super(name, age, skill);
    }

    codding(hours) {
        console.log(`Я вже своє відробив`);
    }
}

const ihor = new Human("Ihor", 25);
const veronika = new Developer("Veronika", 19, "React");
const valera = new TeamLead("Valera", 30, ["Node", "Nest"]);

console.log(veronika);
veronika.greeting()

veronika.codding(8);

valera.codding(13)
console.log(valera);