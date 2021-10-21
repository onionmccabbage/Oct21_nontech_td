// this service will access data from elsewhere on the internet
// here is a function to get some data
const getData = () => {
    // here is a REST API
    fetch('https://swapi.dev/api/species/2')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            display.innerHTML = data.name
        }
    )
}