// this service will access data from elsewhere on the internet
// here is a function to get some data
// we need an array to store each of the returned items
items = [] // it begins as an empty array

const getData = (_id, _cat) => {
    // check id is valid
    if (_id < 1 || _id >8){
        _id = 1 // set a sensible default
    }
    // build the URL for the API
    let swapiUrl = `https://swapi.dev/api/${_cat}/${_id}`
    console.log(swapiUrl)
    // here is a REST API
    fetch(swapiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            txtName.innerHTML = data.name
            // monitor.innerHTML = data
            // append each new item to our array
            // items.push(data)
            // console.log(items)
            
            // we can populate an instance of our StarWarsItem
            // sw_item = new StarWarsItem(data.name)
            // console.log(sw_item)
            // items.push(sw_item)
            // console.log(items)

            // or we can decide what class to use, based on teh user choice of category
            if(_cat=='people'){
                // make a 'people' instance
                sw_item = new People(data.name, data.eye_color, data.height, data.hair_color)
                // put some data on the web page
                detail_1.innerHTML = `Eyes   : ${sw_item.eye_color}`
                detail_2.innerHTML = `Height : ${sw_item.height}`
                detail_3.innerHTML = `Hair   : ${sw_item.hair_color}`
            }
            else if(_cat=='species'){
                // make a 'species' instance
                sw_item = new Species(data.name, data.average_height, data.classification, data.designation)
                // put some data on the web page
                detail_1.innerHTML = `Average Height : ${sw_item.average_height}`
                detail_2.innerHTML = `Classification : ${sw_item.classification}`
                detail_3.innerHTML = `Designation    : ${sw_item.designation}`
            }else if(_cat=='planets'){
                // make a 'people' instance
                sw_item = new Planet(data.name, data.population, data.diameter, data.climate)
                // put some data on the web page
                detail_1.innerHTML = `Population  : ${sw_item.population}`
                detail_2.innerHTML = `Diameter : ${sw_item.diameter}`
                detail_3.innerHTML = `Climate  : ${sw_item.climate}`
            }
            items.push(sw_item)
            console.log(items)
        }
    )
}