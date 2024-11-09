// Task 1
const Animal = {
    constructor: function(name, voice) {
        this.name = name;
        this.voice = voice;
        return this;
    },

    get sound() { 
        return this.voice;
    }
}

const Dog = Object.create(Animal).constructor("Bolik", "Гав");
console.log(Dog);

const Cat = Object.create(Animal).constructor("Vic", "Мяу");
console.log(Cat);

// Task 2
const PizzaOrder = {
    status: "Beginning to prep your order",
    constructor: function (customerEmail, orderId, products) {
        this.customerEmail = customerEmail;
        this.orderId = orderId;
        this.products = products;
        return this;
    },

    get total() {
        return this.products.reduce((acc, {price}) => acc + price, 0);
    },

    checkStatusOfDelivery() {
        console.log(`Checking status of delivery...`);
        console.log(`Current status is ${this.status}`);
    }
}

const pizzaOrder1 = Object.create(PizzaOrder).constructor("exmaple1@gmail.com",
    "1234", 
    [
    {name: "Tony's Pizza 30sm", price: 199.99, options: []}
    ]
);
console.log(pizzaOrder1);

const pizzaOrder2 = Object.create(PizzaOrder).constructor("exmaple2@gmail.com",
    "5678", 
    [
    {name: "Meety Greety Pizza 30sm", price: 299.99, options: []}
    ]
);
console.log(pizzaOrder2);
