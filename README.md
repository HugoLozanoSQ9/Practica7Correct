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

# Montar Router

Primero se crea el archivo
Segundo se crea el router
Tercero se pega o se crea la lógica de las rutas
Cuarto se manta el router en el sever.js
primero se llama const kodersRouter = require('./koders.router')
y luego se aplica con esta linea server.use('/koders',kodersRouter)


# Single responsability principle

Darle solamente una función a cada archivo de js

# middlewares
software  intermedio 
                |------middleware-----------server
cliente --------|-middleware----------------server
                |---------------middleware--server

Los middlewares son funciones que tienen acceso a las peticiones que hace el cliente y son funciones intermediarias entre el usuario y el server
"va transformando la petición" 
por lo que cuando llegue al endpoint la petición ya está transformada

un middleware que ya se ha ocupado por ejemplo es:

server.use(express.json )

dado que la petición en un inicio es texto plano y de ahí lo transforma en JSON para que el server lo pueda entender
Se puede tener un middleware para :
application 
router
error
built-in 
third -party 

Nosotros vamos a manejar solo la de aplicación y la de router

con server.use o router.use se pueden crear los middlewares

En general los middlewares son funciones que se ejecutan en orden como se van montando :D!

Todas las funciones en get, post etc... son middlewares XD 
solamente que no son taaaan importantes para usar el next()


