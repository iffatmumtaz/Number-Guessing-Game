#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Guess a number between 1 to 20");
///Creating variables
let a = Math.floor(Math.random() * 20);
while (true) {
    let input = await inquirer.prompt({ name: "guess",
        type: "number",
        message: "Enter your guessing number:" });
    //code for given number
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulations your guessing number is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    //adding hint
    if (a > ans) {
        console.log("hint:number is higher");
    }
    else {
        console.log("number is lower");
    }
    console.log("GaMe Is OvEr");
}
;
