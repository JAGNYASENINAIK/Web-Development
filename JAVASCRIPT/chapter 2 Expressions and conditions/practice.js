//q-1
/*
const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("what is your age")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age lies between 10 & 20")
}
else{
    console.log("your age  does not lies between 10 & 20")
}*/

//q-2
const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("what is your age")
switch(age){
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    case '16':
        console.log("your age is 16")
        break
        default:
            console.log("your age is not special")
}