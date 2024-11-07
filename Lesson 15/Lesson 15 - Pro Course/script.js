// Task 1
const user = {
  name: "Max",
  age: 21,
};

console.log(user);

user["email"] = "user@example.com";
user.userName = "user123";

console.log(user);

// Task 2
const calculator = {
  addadditionMethod(x, y) {
    return x + y;
  },
  subtractionMethod(x, y) {
    return x - y;
  },
  multiplicationMethod(x, y) {
    return x * y;
  },
  divisionMethod(x, y) {
    return x / y;
  },
};

console.log(calculator.addadditionMethod(2, 3));
console.log(calculator.subtractionMethod(15, 9));
console.log(calculator.multiplicationMethod(7, 3));
console.log(calculator.divisionMethod(13, 8));

// Task 3
const circle = {
  _radius: 1,

  get area() {
    return Math.PI * this._radius ** 2;
  },

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.log("Радіус має бути позитивним числом.");
    }
  },

  get radius() {
    return this._radius;
  },
};

console.log(`Початковий радіус: ${circle.radius}`);
console.log(`Площа кола: ${circle.area}`);

circle.radius = 5;
console.log(`Новий радіус: ${circle.radius}`);
console.log(`Нова площа кола: ${circle.area}`);

circle.radius = -3;

// Task 4
const car = {
  brand: "BMW",
  model: "M5",
  description() {
    return console.log(
      `
            Машина ${this.brand} ${this.model} — це спортивний седан, 
            який поєднує в собі розкіш, продуктивність і технології. 
            Вперше представлений у 1984 році, M5 швидко став іконою 
            у світі автомобілів.
            `
    );
  },
};

console.log(car);
car.description();

// Task 5
const product = {
  name: "Iphone",
  model: "16 Pro Max",
  price: 60000,
  applyDiscount(newPrise) {
    const calculateAmountDiscount = (this.price * newPrise) / 100;
    const reducingPrice = this.price - calculateAmountDiscount;

    console.log(`Знижка: ${newPrise}% (${calculateAmountDiscount} гривень)`);
    console.log(`Нова ціна: ${reducingPrice} гривень`);
  },
};

console.log(product.name, product.model);
console.log(product.price);

product.applyDiscount(20);

// Task 6
const userProfile = {
    firstName: "Valentyn",
    lastName: "Dovbysh",
    email: "v.dovbysh@gmail.com",
    _password: "Val_Dovbysh",
    get password() { return this._password },
    set password(value) { this._password = (typeof value === "string") ? value : this._password; }
}

console.log(userProfile.password);

userProfile.password = "Dovbysh-285";
console.log(userProfile.password);

userProfile.password = 23467;
console.log(userProfile.password);

