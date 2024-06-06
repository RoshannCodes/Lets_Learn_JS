// --------------------- NUMBERS --------------------

let number = 1000
let floatNum = 100.198394

let numberString = number.toString();
console.log(typeof numberString)
console.log(numberString.length)

console.log(floatNum.toFixed(2));
console.log(floatNum.toPrecision(5))

let a = 1000000000
console.log(a.toLocaleString()); //COMMA as per US PRACTICE
console.log(a.toLocaleString('en-IN'))  //COMMA AS PER INDIAN/NEPALI PRACTICE


//---------------------- MATHS ---------------------

console.log(Math.abs(-4)); // absolute value(modulus)
console.log(Math.round(4.4));  //normal round off
console.log(Math.ceil(4.2))  // chooses upper number i.e. 5 in this case
console.log(Math.floor(4.9)) //chooses lower number

let arr = [1,2,3,4,5]
console.log(Math.min(arr))   // LINE 25-27 is wrong. JS Math function doesnt directly accept array. Correct way is given below( 29-30)
console.log(Math.max(arr))

console.log(Math.min(11,22,33,44,55))
console.log(Math.max(11,22,33,44,55));


Math.random(); //---> THIS GIVES NUMBER FROM 0 TO 1 RANDOMLY

const min = 10,max = 20

let randomNum = Math.floor(Math.random() * (max-min + 1) )+min  // code to generate random number from 10 to 20
console.log(randomNum)