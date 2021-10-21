// here we explore ECMAScript Arrays
// An Array is a collection of data values, indexed by number
let arr = ['Ethel', 'pudding', true, 39, -99] // the square brackets indicate an array

// we can access any member of the array by it's index
console.log(arr[1]) // 'pudding'
arr[2] = false
arr[2] = 'changed' // data types of arrays an be anythnig and can be mixed
// we can alter arrays as follows
arr.push('added') // this value is appended to the end of the array
other = [9,8,7,6,5]
arr.push(...other) // the elipsis (...) unpacks the array into its members
arr.pop() // removes the last value from the array
arr.shift() // removes element zero (from the start of the array)
console.log(arr, arr.length)
// we can iterate over an array
for (let item of arr){
    console.log(item)
}