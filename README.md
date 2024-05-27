# Estructura del proyecto: 
index.js 
Se encarga de crear la base de datos con el db.init() el cual viene de db.js

ocupamos el server desde server.js

Se denife el puerto por el que vamos a escucharlo

server.js 
Se encarga de crear nuestro server y lo exporta para que podamos hacer uso de el cuando queramos, dandonos la posibilidad de crear muchos server's

db.js
Se encarga de crear la base de datos, si no existe

koders.usecase.js
Se encarga de realizar todo lo que haría el negocio 

En este caso sería:

agregar koders
eliminar koders
eliminar todos los koders
listar koders

En pocas palabras serían todo lo que puede hacer el usuario con los koders.

### Cabe destacar que db.js si o si solo conoce como manejar la base de datos (como leer, escribir modificar y manipular información)


# Exportar modulos
si queremos exportar modulos lo que se hace es: 

module.exports = moduloAExportar

cuando se quiere exportar más de un elemento se puede exportar un objeto 
 
module.exports = {
    modulo1 : modulo1
    modulo2 : modulo2
}