// //program to add first n natural numbers
// let sum=0
// const prompt=require("prompt-sync")({sigint:true}); 
// let n = prompt("enter the value of n :")
// n=Number.parseInt(n)
// for(let i =0 ;i<n;i++){
//     sum+=(i+1) // sum=sum+(i+1)
//     console.log(i+1) ,"+";
// }
// console.log("sum of first "   +n   + "-natural number is "  +    sum) 

//factorial

let fact=1
const prompt=require("prompt-sync")({sigint:true}); 
let n = prompt("enter the value of n :")
n=Number.parseInt(n)
for(let i =1 ;i<n;i++){
    fact*=(i+1) 
    //console.log(i*1) ,"+";
}
console.log("factorial of first "   +n   + "-natural number is "  +    fact) 