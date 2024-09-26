//q-1
/*
const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("what is your age")
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
    case 12:
        console.log("your age is 12")
    case 13:
        console.log("your age is 13")
    case 14:
        console.log("your age is 14")
    case 15:
        console.log("your age is 15")
    case 16:
        console.log("your age is 16")
}