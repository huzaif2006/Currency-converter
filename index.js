// A simple currency converter created with the help of typescript, node.js and inquirer.
// import inquirer from npm library.
import inquirer from "inquirer";
//
const currency = {
    USD: 1, //base currency
    EUR: 0.94,
    GBP: 0.8,
    INR: 83.61,
    PKR: 277.3,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
// Convert currency from one unit to another based on provided amounts and conversion rates.
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(3));
