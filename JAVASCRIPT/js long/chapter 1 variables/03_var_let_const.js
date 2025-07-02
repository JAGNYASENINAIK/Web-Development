console.log("my name is jagnyaseni")
var a =78;
var b = "jagnyaseni";
let g = "jagn";
var c ="null"
var d = "undefined"
// if we use let in a block and change the value it will bw changed everywhere
{
    var b ="youu"
    console.log(b)
} 
console.log(b)
//if we use let in block only block will change
{
    let g ="bench"
    console.log(g)
} 
console.log(g)
 //if once const is declared it can not be changed//
const author =  "reenu"
// const author="menu"
// let author="9" throws error
console.log(author)