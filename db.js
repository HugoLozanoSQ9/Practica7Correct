const fileName = 'db.json'
const fs = require('node:fs')
//Datos que traerá el archivo por defecto
const defaultData = {
    koders:[],
}

//Validar si existe el archivo, si no esxiste lo crea
function init(){
    if(!fs.existsSync(fileName)){
        fs.writeFileSync(fileName,JSON.stringify(defaultData))
    }
}
//anteriormente se había hecho el JSON.parse(fs.readFileSync(fileName,'utf-8')).koders (hardkodeando los koders)
const read = () => JSON.parse(fs.readFileSync(fileName,'utf-8'))

function write(dataToWrite){
    fs.writeFileSync(fileName, JSON.stringify(dataToWrite))
}
module.exports = {
    //init : init, cuando la llave va a tener el mismo valor que el valor
    //entonces se puede poner directo una sola vez y no de la forma tradicional
    init,
    read,
    write,
}