// # Get Sum of People's Budget

// Create the function that takes an array with objects and returns the sum of people's budgets

// (that are older than a certain limit)

// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//     { name: "John", age: 21, budget: 29000 },
//     { name: "Steve", age: 32, budget: 32000 },
//     { name: "Martin", age: 16, budget: 1600 }
// ]) ➞ 62600

function getBudgets(arr, age) {
    let sum = 0;

    for (let person of arr) {
        if (person.age >= age) {
            sum += person.budget;
        }
    }

    return sum;
}

function getPeopleAboveAge(arr, age = 18) {
    let list = [];

    for (let person of arr) {
        if (person.age >= age) {
            list.push(person);
        }
    }

    return list;
}

const peopleList = [
    {
        name: "John",
        age: 21,
        budget: 29000
    },
    {
        name: "Steve",
        age: 32,
        budget: 32000
    },
    {
        name: "Martin",
        age: 18,
        budget: 1600
    }
];

const ageLimit = 21;

const budget = getBudgets(peopleList, ageLimit);

console.log(budget); // 62600