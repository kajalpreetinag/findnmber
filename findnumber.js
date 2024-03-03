const number = require("readline-sync")
let num1 = number.questionInt("enter first number: ");
let num2 = number.questionInt("enter second number: ");

{
    d=Math.floor(num1/num2);
    result=d*num2;
}
console.log(result)
