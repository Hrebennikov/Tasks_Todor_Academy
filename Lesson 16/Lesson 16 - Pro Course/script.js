// Task 1
const person = {
    name: "Volodymyr",
    _age: 25,
    get age() { return this._age },
    set age(value) { this._age = value }
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
    value: "Male",
    writable: false,
    enumerable: true,
    configurable: false,
});

for (key in person) {
    console.log(person);
}

console.log(Object.getOwnPropertyDescriptor(person, "gender"));

// Task 2
person.name = "Valerii";
console.log(person);

console.log(person.gender);

delete person._age;
console.log(person);

// Task 3
const car = {
    brand: "BMW",
    model: "M5",
    year: 2015,
}

Object.preventExtensions(car);

car.color = "Black";
console.log(car);

const carCopy = {...car}
Object.seal(carCopy);
console.log(carCopy);

delete carCopy.year;
console.log(carCopy);

// Task 4
const book = {
    title: "Голодні ігри",
    author: "Сюзанна Коллінз",
}
Object.freeze(book);

book.title = "Голодні";
book.pages = "250 pages";
delete book.author;

console.log(book);

// Task 5
const user = {
    firstName: "Victor",
    lastName: "Kmin",
    email: "v.kmin@gmail.com",
    _password: "V_kMin",
    get password() { return this._password },
    set password(value) { this._password = (typeof value === "string") ? value : this._password; }
}

Object.freeze(user);

console.log(user);
user.password = "12356"

console.log("\n");

console.log(user.password);

// Task 6
const settings = {
    version: '1.0.0',
    baseUrl: 'https://app.example.com',
};
  
Object.freeze(settings);
  
settings.version = '2.0.0'; 
delete settings.baseUrl; 
settings.apiKey = '12345'; 
  
console.log(settings); 
  
