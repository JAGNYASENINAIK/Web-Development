// while loop
const prompt=require("prompt-sync")({sigint:true}); 
let  n = prompt("Enter the value of n :")
n=Number.parseInt(n)
let i =0;
while(i<n){
    console.log(i)
    i++;
}

//do while loop
// const prompt=require("prompt-sync")({sigint:true}); 
// let  n = prompt("Enter the value of n :")
// n=Number.parseInt(n)

// let i =10;
// do{
//     console.log(i)
//     i++;
// }while(i<n)