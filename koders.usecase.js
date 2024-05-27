const db = require('./db')

function add(newKoder) {
    if(!newKoder.name) throw new Error ('name is required')
    if(!newKoder.generation) throw new Error ('generation is required')
    
    newKoder.generation = parseInt(newKoder.generation)
    if(isNaN(newKoder.generation)) throw new Error ('generation must be a number')
    if(newKoder.generation <= 0) throw new Error ('generation must be greater than 0')
    /*
    Primera forma de solución
    if(newKoder.gender != 'm' && newKoder.gender != 'f' && newKoder.gender != 'nb'){
        throw new Error ('only m and f and nb are accepted')
    }
    */
    if(!newKoder.gender)throw new Error ('gender Is required')

    if(!['f','m','nb'].includes(newKoder.gender.toLowerCase())){
        throw new Error ('only m, f and nb are allowed')
    }

    if(!newKoder.age)throw new Error ('Age Is required')
    newKoder.age = parseInt(newKoder.age)
    if(isNaN(newKoder.age)) 
    if(newKoder.age <= 0)throw new Error ('Age must be greater than 0')

    if(typeof newKoder.isActive != 'boolean')throw new Error ('Age must be boolean')

    //Se trae toda la data y se almacena en dbData
    const dbData = db.read()

    //Acá estoy definiendo que quiero que new koder ingrese a la lista de koders
    dbData.koders.push(newKoder)

    //Estoy actualizando el archivo reescribiendo toda la data
    db.write(dbData)
    
    return dbData.koders;
}

function deleteAll(){
    //se lee el archivo
    const dbData = db.read()
    //Se define que en el archivo la propiedad koders va a ser una lista vacía entonces: 
    dbData.koders = []
    //ya solamente se actualiza el archivo
    db.write(dbData)
}

function deleteByName(name) {
    if (!name) throw new Error ('Name is required')

    const dbData = db.read()
    //Filter nos devuelve un arreglo que trae todos los elementos que no son el nombre que nos proporcionó en el arg
    dbData.koders = dbData.koders.filter((koder)=>koder.name != name)

    db.write(dbData)

    return dbData.koders
}

const getAll = () => db.read().koders


module.exports = {
    add, 
    deleteAll, 
    deleteByName, 
    getAll,
}