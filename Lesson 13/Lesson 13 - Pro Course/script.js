// Task 1
function multiplyByTwo(a) {
    return a * 2
}

console.log(multiplyByTwo(23));

// Task 2
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

const numbers = [10, 5, 8, 20, 3];
console.log(findMax(numbers));

// Task 3
function updateUserInfo(user, newName) {
    user.name = newName;
    return user;
}

function getUserInfo(user) {
    return user.name;
}

const user = { name: 'John', age: 30 };
updateUserInfo(user, 'Alice');
console.log(getUserInfo(user));

// Task 4
function calculateAverage(arr) {
    const array  = arr.reduce((acc, item) => acc + item);
    return array / arr.length
  }

const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1));
