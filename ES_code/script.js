// this script is re-useable across multiple pages, and is also easier to test
// we can access the HTML elements
let output = document.getElementById('monitor')
// output.innerHTML = 'Welcome'
// Objects - in JavaScript EVERYTHING is an Object
let obj = { item   : 'Spot', 
            price  : 3.99, 
            qty    : 6, 
            onsale : false,
            prettyPrint : ()=>{
                let str = `Item: ${item}` //, Price: &euro;${obj['price']}, Quantity: ${obj.qty}`
                return str
            }
        }
// output.innerHTML = obj.prettyPrint()

const showInfo = ()=>{
    // we can see that all Object derive from the prototype
    console.log(obj) // 
    // we can access members of an object using square brackets OR using dot notation
    str = `Item: ${obj['item']}, Price: &euro;${obj['price']}, Quantity: ${obj.qty}`
    // output.innerHTML = str
}
document.addEventListener('DOMContentLoaded', showInfo)
// exploring Classes (available since ES6)
class Person {
    constructor (_name, _age, _type){ // this is a function within a class
            this.name = _name // these are properties of thsi class
            this.age = _age
            this.type = _type    
        }
    // we can override the built-in methods of a class
    toString(){ // another function within this class (a method)
        let str = `Name: ${this.name} Age: ${this.age}`
        return str
    }
}
// use the class (make instances)
kate = new Person('Kate', 24, 'Guest')
liz = new Person('Liz', 24, 'Guest')
monica = new Person('Monica', 25, 'User')
// we can access properties of this instance
console.log(kate.toString())
// challenge - output one of our instances into the web page itself
output.innerHTML = liz.toString()
// objects and classes are copied by REFERENCE (not by VALUE)
alter_ego = monica
alter_ego.name = 'Michael'
output.innerHTML = monica.toString()
