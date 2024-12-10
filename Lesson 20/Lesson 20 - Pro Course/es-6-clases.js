// Task 1
class Employee {
    constructor(name, age, position, baseSalary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.baseSalary = baseSalary;
    }

    calculateSalary() {
        return console.log(`${this.name} receives in a month ${this.baseSalary} $.`);
    }
 
    work() {
     return console.log(`${this.name} is working as a ${this.position}.`);
    }
}

const employee = new Employee("Victor", "25", "Project Manager", 700);

employee.calculateSalary();
employee.work()
console.log(employee);

// Task 2
class Developer extends Employee {
    constructor(name, age, position, baseSalary, programmingLanguage) {
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    calculateSalary () {
        const bonusDevelopmentSoftwareCode = 500;
        return console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode} $.`);
    }

    work() {
        return console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}

const developer = new Developer("Victor", 23, "Front-End Developer", 600, "JS, Python");

developer.calculateSalary()
developer.work()
console.log(developer);

// Task 3
class Manager extends Developer {
    constructor(name, age, position, baseSalary, programmingLanguage, teamSize) {
        super(name, age, position, baseSalary, programmingLanguage);
        this.teamSize = teamSize;
    }

    calculateSalary() {
        const bonusDevelopmentSoftwareCode = 500;
        const bonusTeamSize = 100
        return console.log(`${this.name} receives in a month ${this.baseSalary + bonusDevelopmentSoftwareCode + bonusTeamSize} $.`);
    }

    work() {
        return console.log(`${this.name}, in the position of ${this.position}, has a team of ${this.teamSize}.`);
    }
}

const manager = new Manager("Victor", 23, "Team lead Front-End Developer", 1000, "JS, Python, SQL, React, Node.js", "7 people");

manager.calculateSalary()
manager.work()
console.log(manager);
