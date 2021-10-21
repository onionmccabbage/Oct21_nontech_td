// this script is re-useable across multiple pages, and is also easier to test
// we can access the HTML elements
let output = document.getElementById('monitor')
output.innerHTML = 'Welcome'
// Objects - in JavaScript EVERYTHING is an Object
let obj = {item:'Pot', price:3.99, qty:6, onsale:false}
const showInfo = ()=>{
    // we can see that all Object derive from the prototype
    console.log(obj)
}
document.addEventListener('DOMContentLoaded', showInfo)