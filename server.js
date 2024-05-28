//Definir nuestro servidor 
const express = require('express')
//solicitar el router de los koders
const kodersRouter = require('./koders.router')
const mentorsRouter = require('./mentors.router')
//const app = express Se suele representar el server con app
const server = express()

server.use(express.json())
// middleware a nivel de aplicación 
server.use((req,res,next)=>{
    console.log('middleware de app')

    const authorization = req.headers.authorization

    if (authorization === 'alohomora'){
        req.isAWizzard = true
        next()
    }else{
        res.status(403)
        res.json({
            message:'No tienes acceso'
        })
    }

})

server.use((req,res,next)=>{
    console.log('middleware de app 2')
    next()
})

//Montar el router en el server
server.use('/koders',kodersRouter)
server.use('/mentors',mentorsRouter)

//Cuando se haga un get siempre se va mostrar el mensaje "Kodemia API v1"
server.get('/', (req, res) => {
    res.json({
        message: "Kodemia APIv1"
    })
})

module.exports = server
