 // primitives in js
 //N=NULL
//N=NUMBER
//B=BIGINT
//B=BOOLEAN
//S=STRING
//S=SYMBOL
//U=UNDEFINED

let a =null;
let b =345;
let c =true // can also  be false
let d =BigInt("67879") + BigInt("1");
let e ="REENU"
let f =Symbol("I am a nice symbol")
let g =undefined
let v
console.log(a,b,c,d,e,f,g)
console.log(typeof f)
console.log(typeof v)

//// Non primitives datatypes -objects in JS
const item = 
{
   "reenu":"girl",
   "naina":"actor",
   "sunny":"actor",
   "jd":true,
   "minnie":25,
   "ruhi":undefined
}
console.log(item["reenu"])
console.log(item["naina"])
console.log(item["sunny"])
console.log(item["jd"])
console.log(item["minnie"])
console.log(item["ruhi"])
console.log(item["huuugy"])