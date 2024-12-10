// Task 1
const Employee = {
    constructor(name, age, position, baseSalary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.baseSalary = baseSalary;
        
        return this;
    },

    calculateSalary() {
       return console.log(`${this.name} receives in a month ${this.baseSalary} $.`);
    },

    work() {
    return console.log(`${this.name} is working as a ${this.position}.`);
    }
}

const employee = Object.create(Employee).constructor("Valerii", 23, "Trainee Front-End Developer", 300);
employee.calculateSalary();
employee.work()
console.log(employee);

// Task 2
const Developer = Object.create(Employee);
Developer.constructor = function(name, age, position, baseSalary, programmingLanguage) {
    Employee.constructor.apply(this, arguments);
    this.programmingLanguage =programmingLanguage;
    return this
}

Developer.calculateSalary = function () {
    const bonusDevelopmentSoftwareCode = 500;
   return console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode} $.`);
}

Developer.work = function () {
    return console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
}

const developer = Object.create(Developer).constructor("Valerii", 23, "Front-End Developer", 600, "JS, Python");

developer.calculateSalary()
developer.work()
console.log(developer);

// Task 3
const Manager = Object.create(Developer);
Manager.constructor = function(name, age, position, baseSalary, programmingLanguage, teamSize) {
    Developer.constructor.apply(this, arguments);
    this.teamSize = teamSize;
    return this;
}

Developer.calculateSalary = function () {
    const bonusDevelopmentSoftwareCode = 500;
    const bonusTeamSize = 100
  return  console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode + bonusTeamSize} $.`);
}

Developer.work = function () {
    return console.log(`${this.name}, in the position of ${this.position}, has a team of ${this.teamSize}.`);
}

const manager = Object.create(Manager).constructor("Valerii", 23, "Team lead Front-End Developer", 1000, "JS, Python, SQL, React, Node.js", "7 people");

manager.calculateSalary()
manager.work()
console.log(manager);
