const omegleUser = {}               //non singleton object
const omeUser = new Object()        //singleton object

//both line 1 and 2 is the way of introducing new empty object

omegleUser.id='123oe'
omegleUser.name = 'Roshan Koirala'

const facebookUser = {
    email: 'Koiralaroshan321@gmail.com',
    fullname: {
        firstname : 'Roshan',
        lastname: 'Koirala'
    }
}

console.log(facebookUser.fullname)
console.log(facebookUser.fullname.firstname)

const object1 = {
    a :1,
    b: 2
}

const object2 = {
    c : 3,
    d : 4
}

//const object3 = Object.assign({}, object1,object2)          //giving empty paranthesis is a good practice. not giving it is also same outputting code tho
// object.assign (target,source)

const object3 = {...object1, ...object2}                //spread operator is highly used

