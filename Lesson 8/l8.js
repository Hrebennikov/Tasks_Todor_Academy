const personage = {
    name: "Jason Statham",
    universe: "Shooting in the cinema",
    occupation: "Actor",
    powers: ["Fighter", "Talented", "Operational"],
    introduce: (name) => console.log(`Hello I'm ${name}`),
}

console.log(personage);
console.log(personage.name);
console.log(personage["occupation"]);

// Add method introduce
console.log(personage.introduce(personage.name));

// JSON
const personageInString = JSON.stringify(personage);
console.log(personageInString);

const personageInObject = JSON.parse(personageInString);
console.log(personageInObject);

// Delete
delete personage.universe
console.log(personage);

// Operator in
console.log("name" in personage); // true
console.log("gender" in personage); // false