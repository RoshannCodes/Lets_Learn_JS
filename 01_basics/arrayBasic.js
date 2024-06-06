//collection of items in a variable. 
// Resizable
//it does shallow copy. (i.e. array in js is stored in stack memory) deep copies stored in hip memory
//written in various form as:

const myArr = [1,2,3,4,5]
const myArr2= new Array(6,7,8,9,10)  

console.log(myArr)
myArr.push(6)                   //adds last element
console.log(myArr)
myArr.pop()                     //deletes last element
console.log(myArr)

myArr.shift()                   //removes first element
console.log(myArr)
console.log(myArr.includes(3))  //if 1 is present, returns true


myArr.join()                    //this changes all element into string! And returns in console in different way as normal num. array
console.log(myArr.join())
console.log(myArr)              //.join works as array is a hip, not stack



//SLICE VS SPLICE
console.log('SPLICE VS SLICE STUDY')
console.log(myArr.slice(1,3))   // outputs index 1 to 2, doesnt include 3, works as hip memory stored
console.log(myArr)

console.log(myArr.splice(1,3))  //works as stack memory storing. removes element from index 1 to 3 in original array. but .splice returns from index 1 to 3!
console.log(myArr)

//two array are added using  push. but entire second array  acts as a single indexed element in  newly formed array

let arr1 = [1,2,3]
let arr2 = [3,4,5]

console.log(arr1.push(arr2)) //adds entire second array as an element
 arr1 = [1,2,3]
console.log(arr1.concat(arr2))  //adds perfectly as desired

const newArr = [...arr1,...arr2]    //spread operator --> ...
console.log(newArr)             //adds perfectly, elements come spreading... preference of spread operator is higher than concat

const subArrays = [1,2,[3,4,[5]]]
const newSubArrays = subArrays.flat(Infinity)   //makes every sub arrays into a single new array
console.log(newSubArrays)