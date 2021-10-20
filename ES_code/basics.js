console.log('hello')

// we use let the first time we encounter this variable
let _name = 'Timnit'
console.log(_name)

// no need to use let, since the variable already exists
_name = 'Ethelbert'
console.log(_name)

// older JavaScript uses 'var'
var x = 1
x = 2

// in fact, we can get away with...
y = 99
y = 0

// playtime
count = 1; total = 42.5; flag = true
console.log('typeof count:', typeof count ); 
console.log('typeof total:', typeof total ); 
console.log('typeof name:', typeof _name ); 
console.log('typeof flag:', typeof flag ); 

// null represents nothingness - as opposed to undefined
let project // it starts off as undefined
console.log('project = undefined: ', project);
project = null;
console.log('project = null: ', project);

// can also set to undefined
project = undefined;

// Are logical equal
console.log(null == undefined) // == means are they the same?
// single equals SETS equality, double-equlas CHECKS equality


// constants - capitalize by convention
const MAX_AGE = 30
const MAX_CONNECTIONS = 6

// MAX_AGE = 12 // fails - cannot mutate a const - const is immutable

// exploring strings
pass = 'let me in "please"' // we can use quotes in quotes like this
p = 'let me in \'please\'' // we can encode using \'
p  ='this line contains \t a tab \n and a new line'