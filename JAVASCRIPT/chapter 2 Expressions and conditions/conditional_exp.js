
// const prompt=require("prompt-sync")({sigint:true}); 
 
// let a=prompt("hey what's your age");
// a = Number.parseInt(a) // conerts string to number
// if(a<0){
// alert("This is an invalid age");
// }
// else if(a<9){
//     alert("you are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//     alert("you are a kid and you can think of driving after 18");
// }
// else{
//     alert("you can now drive as you are above 18");
// }


const prompt = require("prompt-sync")({ sigint: true });

let a = prompt("Hey, what's your age? ");
a = Number.parseInt(a); // converts string to number

if (isNaN(a)) {
    console.log("This is an invalid age");
} else if (a < 0) {
    console.log("This is an invalid age");
} else if (a < 9) {
    console.log("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
    console.log("You are a kid and you can think of driving after 18");
} else {
    console.log("You can now drive as you are above 18");
}
console.log("Done")


