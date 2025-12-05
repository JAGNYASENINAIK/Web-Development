// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//  sum=sum+val;
// }
// let avg =sum/marks.length;
// console.log(avg)


// let prices=[250,645,300,900,50]
// for(let i=0;i<prices.length;i++){
//     let offer=prices[i]/10;
//     prices[i]-=offer
// } console.log(prices)

let company=["bloomberg","microsoft","uber","google","ibm","netflix"]
let h=company.shift();
console.log(company)

h=company.splice(2,1,"Ola")
console.log(company)

h=company.push("amazon")
console.log(company)     