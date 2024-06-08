//   {}  curly parenthesis is SCOPE!


console.log(addone(1));         //this gives output even when called before function defination since function addOne is not stored in variable
function addone(num){
    return num +1
}

console.log(addtwo(1));         //this aint valid as addTwo is a variable and is defined below calling
const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(1));

//this is mini hoisting