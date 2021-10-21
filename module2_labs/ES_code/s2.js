// function for the button click event
const fn = ()=>{
    // we need to prevent the form from submitting the page
    event.preventDefault()
    // we need to grab whatever the user has entered into the form
    id = idNumber.value
    cat = category.value
    // call a method of our service
    response = getData(id, cat)
}
// assign the click event handle to the button
btnGetData.addEventListener('click', fn)