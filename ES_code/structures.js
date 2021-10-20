// we can structure our code to make it easy to work with

// logical comparisons
console.log(42 == '42') // true
console.log(42 === '42') // false - they are not identical
// ternary operator
x = 10; y = 20

// ask a logical question ? do this if true : do this if false
result = x == y? 'yes':'no' // no
console.log(result)

// using 'if' logic
let age = 18

if (age<=5) { // five or under
    console.log('we have great pre-school games')
} else if (age>5 && age <18) { 
    console.log('here are games for school-age people')
} else {
    console.log('wow have we got games for you')
}

// iterating over code (loops)
let z = 1
while (z<10){ // check before looping
    console.log(z)
    z++ // increment by one
}
do { // loop before checking
    console.log(z)
    z-- // decrement by one
} while (z>0)
// initial state ; logical test ; what to do each loop
for (let i=1; i<10; i++){
    console.log(i)
}

// functions and scope
let g = 'in the global scope'
function fn(){
    let g = 'in the function block scope'
    console.log(g)
    return g
}
// use the function
fn()
console.log(g)

// since 2015 we can write functions using shorthand syntax
const fnA = (degrees)=>{
    if (degrees <=0){
        console.log('could be freezing')
    } else if (degrees>0 && degrees <=14){
        console.log('a bit chilly')
    } else if (degrees>14 && degrees<=28){
        console.log('fairly comfy')
    } else {
        console.log('rather too warm')
    }
}
let chilly = -6
let hull = 12
let paris = 22
let singpore = 32
fnA(chilly)
fnA(hull)
fnA(paris)
fnA(singpore)



