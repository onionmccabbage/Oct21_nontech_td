// function for the button click event
const fn = ()=>{
    // we need to prevent the form from submitting the page
    event.preventDefault()
    // call a method of our service
    response = getData()
    console.log(response)
}
// assign the click event handle to the button
btnGetData.addEventListener('click', fn)