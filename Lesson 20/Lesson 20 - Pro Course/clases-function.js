//  Task 1
const Employee = function(name, age, position, baseSalary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.baseSalary = baseSalary;
}

Employee.prototype.calculateSalary = function () {
    return console.log(`${this.name} receives in a month ${this.baseSalary} $.`);
}

Employee.prototype.work = function() {
    return console.log(`${this.name} is working as a ${this.position}.`);
}

const employee = new Employee("Vova", "25", "QA testing", 500);

employee.calculateSalary();
employee.work()
console.log(employee);

// Task 2
function Developer (name, age, position, baseSalary, programmingLanguage) {
    Employee.apply(this, arguments);
    this.programmingLanguage = programmingLanguage;
} 

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.calculateSalary = function () {
   const bonusDevelopmentSoftwareCode = 500;
   return console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode} $.`);
}

Developer.prototype.work = function () {
    return console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
}

const developer = new Developer("Vova", 23, "Front-End Developer", 600, "JS, Python");

developer.calculateSalary()
developer.work()
console.log(developer);

// Task 3
function Manager (name, age, position, baseSalary, programmingLanguage, teamSize) {
    Developer.apply(this, arguments);
    this.teamSize = teamSize;
} 

Manager.prototype = Object.create(Developer.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.calculateSalary = function () {
   const bonusDevelopmentSoftwareCode = 500;
   const bonusTeamSize = 100
   return console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode + bonusTeamSize} $.`);
}

Manager.prototype.work = function () {
    return console.log(`${this.name}, in the position of ${this.position}, has a team of ${this.teamSize}.`);
}

const manager = new Manager("Vova", 23, "Team lead Front-End Developer", 1000, "JS, Python, SQL, React, Node.js", "7 people");

manager.calculateSalary()
manager.work()
console.log(manager);
