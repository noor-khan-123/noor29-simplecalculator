#! /usr/bin/env node 
//shabang called this line of code 
//used to execute our file in coding world

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {message: "Enter first number", type: "number", name: "firstnumber"},
  {message: "Enter second number", type: "number", name: "secondNumber"},
  {
    message: "select one of the operators to perform action", 
    type: "list", 
    name: "operator", 
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

//conditional statment
if(answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondNumber); 
} else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondNumber);
} else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondNumber);
} else {
    console.log("Please select valid operator");
};