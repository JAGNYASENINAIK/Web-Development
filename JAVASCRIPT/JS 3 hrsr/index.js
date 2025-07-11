// ways to write in js
// console.write("heiuhgytdrfuj");
// alert("meeeee")

//  2.javascript console
// console.log("hello world" ,4+6, "another log");
// console.warn("this is warning");
// console.error("this is an error");

//  3.variables - container to store data values
var num = 45;
var number = 45;
// console.log(num + number);

// 4. datatypes in js
//numbers
var num1 = 788;
var num2 = 456787;

//strings
var str1 = "this is a string";
var str2 = 'this is also a string';

// objects
var marks = {
    ravi: 67,
    reenu: 99,
    subham: 55
}
// console.log(num1)
// console.log(str2)
// console.log(marks)
// console.log(num2)

// boolean
var a = true
var h = false
// console.log(a,h)

// var und =undefined;
var und;
// console.log(und)

var n = null;
// console.log(n)

/*
at very high level there are two types of data types
1.primitive-undefined ,null,number,string,boolean,symbol
2.reference-arraya and objects
*/

var arr = [1, 2, 3, "reenu", 4, 5, "hello", "suuu"]
// console.log(arr)
// console.log(arr[6])
// console.log(arr[2])

// operators in java
// arithmatic operators
var x = 100;
var y = 10;
// console.log("the valuse of x + y is",x+y);
// console.log("the valuse of x - y is",x-y);
// console.log("the valuse of x * y is",x*y);
// console.log("the valuse of x / y is",x/y);

//assignment operators
var c = 5;
// c += x
// c =+ 2 ,c = c -2
// c *= 2
c /= 2; //c =c/2
// console.log(c)

// comparison operators
// var i =78;
// var j=55;
// console.log(i==j)
// console.log(i=!j)
// console.log(i>=j)
// console.log(i<=j)
// console.log(i<j)
// console.log(i>j)

// logical operators
// 
// console.log(true && true)
// console.log(false&& false)
// console.log(true && false)

// console.log(true || true)
// console.log(false|| false)
// console.log(true || false)

// console.log(!true)
// console.log(!false)
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }
// c1=avg (6,8)
// c2=avg (60,120)
// console.log(" avg of both is ",c1,c2)


// CONDITIONALS IN JS
/*
var age1 =45;
if(age1 >9){
    console.log("you are not a kid")
}

// if-else
var age2=15
if(age2 >18){
    console.log("you can vote")
}
else{
    console.log("you can not vote")
}

// if-else ladder
var age3= 60;
if(age3 <25){
    console.log("you should get a job")
}
else if(age3<35){
    console.log("you should get married")
}
else if(age3 <40){
    console.log("you should buy a house")
}
else{
    console.log("just die")
}
console.log("say thanks to god")
*/

//LOOPS IN JS
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach(function(element){
// console.log(element);
// })

let j=0;
// const as=0;
// as = as + 1;  //throws error

// while(j<arr.length){
//     console.log(arr[j]);
//     j++
// }

// do{
//     console.log(arr[j]);
//     j++
// }while(j<arr.length)


//continue - is itteration ko chod do
//break - looping chod do

// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//         console.log(arr[i])
//     }

//array methods
 
let myarr=["fan","cooler","ac",90,65,null,true,false]
// myarr.pop();  // this will remove from last
// myarr.push("reenu"); //this will add in the last
// // myarr.shift()
// myarr.unshift("sameer") //this will add in the first
// myarr.toString()
// console.log(myarr)
// // console.log(myarr.length)

// const newlen = myarr.unshift("naina");   // this gives length
// console.log(newlen)
//sort coverts all elements into string then see who will come first ac to dictionary


let str="hello good morning i am reenu , i am very very sweet you know sweet is my personality"; //spaces are also considered 
// console.log(str.length)
// console.log(str.indexOf("reenu"))
// console.log(str.indexOf("reenu")) // it will return first index if there is two reenu
// console.log(str.indexOf("sweet")) // it will return first index if there is two reenu
// console.log(str.lastIndexOf("sweet"))

// console.log(str.slice(0,67)) //it will start from to and print till 67
// console.log(str.slice(0,3)) //excludes 3

//  m=str.replace("reenu","suraj")
//  m=m.replace("sweet","bitter")
// console.log(m,str)


let mydate=new Date();
// console.log(mydate)
// console.log(mydate.getDay())
// console.log(mydate.getMonth())
// console.log(mydate.getMilliseconds())
// console.log(mydate.getTime())
// console.log(mydate.getFullYear())
// console.log(mydate.getHours())

//DOM =DOCUMENT OBJECT MODEL 
let elem =document.getElementById('click');
// console.log(elem)

let elemc =document.getElementsByClassName("container")
// console.log(elemc)
elemc[0].style.background="yellow"
// elem[1].style.background=" lightgreen"
elemc[1].classList.add("bg-primary")
elemc[0].classList.add("text-success")
// elem[0].classList.remove("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemc[0].innerHTML);
// console.log(elemc[1].innerText);

// tn=document.getElementsByTagName('div')
// console.log(tn)
// // tnn=document.getElementsByTagName('button')
// console.log(tnn)
// createdElement=document.createElement('p')
// createdElement.innerText="this is a paragraph"
// tn[0].appendChild(createdElement)

// createdElement2=document.createElement('b')
// createdElement2.innerText="this is a bold"
// tn[0].replaceChild(createdElement2, createdElement)
// // removeChild(element);


// selecting usinh query
// sel=document.querySelector('.container');
// console.log(sel)
// sel=document.querySelectorAll('.container');
// console.log(sel)

// events
function clicked(){
    console.log('the button was clicked')
}

window.onload=function(){
    console.log('the document was loaded')
}

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
//     console.log("click hua")
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse in container")
// })

// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouse up  when clicked on container")
// })


// firstContainer.addEventListener('mousedown',function(){     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
//     console.log("mouse down  when clicked on container")
// })


// arrow function
// function summ(a,b){
//         return a+b;
//     }
//     summ=(a,b)=>{
//             return(a+b)
//  }
        
 // set timeout and setinterval
 loaro=()=>{
     document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired </b>"
    console.log("i am your log ")
 }
 setTimeout(logkaro,5000)
        


