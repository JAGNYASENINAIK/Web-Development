
// pro-1
// let marks={
//     harry:98 ,
//     rohan:70,
//     akash:7
// }   
// for ( i=0;i<Object.keys(marks).length;i++){
//     console.log("marks of " +Object.keys(marks)[i]+  "are  :"  + ( marks[Object.keys(marks)[i]]))
//     }

// // pro-2
// for(let i in marks){
//     console.log("marks of " +i+ " are :"  + marks[i])
// }

// pro-3
// let cn = 498;
// const prompt=require("prompt-sync")({sigint:true}); 
// let i 
// while(i!=cn){
//     console.log("Try Again")
//     i=prompt("Enter a number : ")
// }
// console.log("you have entered a correct number")

//pro-4
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log("mean of a b c d  is "  + mean(4,6,8,2))