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

let sum=0
const prompt=require("prompt-sync")({sigint:true}); 
let n = prompt("enter the value of n :")
n=Number.parseInt(n)
for(var i =0 ;i<n;i++){
    sum+=(i+1) // sum=sum+(i+1)
    console.log(i+1) ,"+";
}
console.log("sum of first "   +n   + "- natural number is "  +    sum) 

console.log(i)

// //factorial

// let fact=1
// const prompt=require("prompt-sync")({sigint:true}); 
// let n = prompt("enter the value of n :")
// n=Number.parseInt(n)
// for(let i =1 ;i<n;i++){
//     fact*=(i+1) 
//     //console.log(i*1) ,"+";
// }
// console.log("factorial of first "   +n   + "-natural number is "  +    fact) 

// let obj ={
//     reenu:90,
//     sinu:89,
//     rahul:78,
//     jakul:60,
//     pritul:20,
// }
// for ( let a in obj){
//     console.log("Marks of  " +a+ " are" + - obj[a])
// }

// for (let b of "reenu"){
//     console.log(b)
// }