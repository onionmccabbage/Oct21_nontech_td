// this is a class to handle Star Wars items retrieved from htps://swapi.dev/api
class StarWarsItem {
    constructor(_name){
        this.__name = _name
    }
    // getter and setter methods
    get name(){
        return this.__name
    }
    set name(newName){
        // validate the name is ok
        if (newName !='' && typeof(newName) == 'string'){
            this.__name = newName
        } else {
            this.__name = 'Default'
        }
    }
}

// we can extend this class...
// (often we would put separate classes in their own script files)
class People extends StarWarsItem {
    constructor(_name, _eye_color, _height, _hair_color){
        super(_name)
        this.eye_color  = _eye_color
        this.height     = _height
        this.hair_color = _hair_color
    }
}
class Species extends StarWarsItem {
    constructor(_name, _average_height, _classification, _designation){
        super(_name)
        this.average_height  = _average_height
        this.classification  = _classification
        this.designation     = _designation
    }
}
class Planet extends StarWarsItem {
    constructor(_name, _population, _diameter, _climate){
        super(_name)
        this.population = _population
        this.diameter = _diameter
        this.climate = _climate
    }
}