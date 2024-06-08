const arrFun = (num1,num2) => {
    console.log(num1+num2)
}

arrFun(2,4)

//since the work is of just one line in the given function, it can also be written as:
const addingFun = (num1,num2) => (num1+num2)      //return keyword is also not necessary. use small parenthesis, its compulsory in returning object

console.log(addingFun(1,2))