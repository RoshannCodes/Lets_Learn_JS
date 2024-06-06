let myDate = new Date()

console.log(`1= ${ myDate.toString()} `)
console.log(`2= ${myDate.toDateString()} `)                   //clean day and date
console.log(`3= ${myDate.toJSON()} `)
console.log(`4= ${myDate.toISOString()} `)
console.log(`5= ${myDate.toLocaleString()} `)                 //clean date and time(Coordinate Universal Time)
console.log(`6= ${myDate.toLocaleDateString()} `)             // clean date 

console.log(typeof myDate)                                    //Date is an object!!! Important for interview


let createdDate = new Date(2024, 0, 6, 13,50,30)              //declared specific date. month starts from 0 to 11. 0=Jan 1=Feb...
console.log((createdDate).toLocaleString());


let createdDate2 = new Date('01-06-2024')                     //If string is passed, start month from 1
console.log(createdDate2.toDateString())     

//line 13 has its month started from 0. This is because data is inserted in array form and month works as if it is an index.

let myTimeStamp = Date.now()
console.log(Math.floor((myTimeStamp)/1000))                   //converted miliseconds to secondd (from 1970 jan 1 to today)
console.log(createdDate.getTime()/1000)                       // from 1970 jan 1 to created date


//createdDate.getMonth, .getDay, .getFullyear gives month day and year only!!