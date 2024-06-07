// singleton object (constructor creates single object)

const mySym = Symbol("key1") 

const JsUser = {                                        // key value pair inside curly braces is object
    name : 'Roshan',
    roll : 68,
    college: 'Pulchowk Engineering College',
    email: 'koiralaroshan@gmail.com',
    "full name" : 'Roshan Koirala',                     //double name as a key can be separated using space but should be entered as a string
    [mySym] : 'My Key Is Unique'                        //key should be in bigger braces with already introduced before
}

console.log(JsUser['name'])                             //better practice to access Objects value! String should be accessed supplying string
console.log(JsUser.email)                               //another way of accessing objects value!

console.log(JsUser['full name'])                        //accessing space containing keys is only possible by 11th line process but not by 12th line! So is considered as better practice to use 11th line process

console.log(JsUser[mySym])

//object value can be freezed to avoid any further changes in its value

Object.freeze(JsUser)                       //object.freeze(NAME OF OBJECT YOU WANNA FREEZE)