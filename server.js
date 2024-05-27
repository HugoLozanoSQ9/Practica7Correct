//Definir nuestro servidor 

const express = require('express')
const kodersUseCase = require('./koders.usecase')

//const app = express Se suele representar el server con app
const server = express()

server.use(express.json())

//Cuando se haga un get siempre se va mostrar el mensaje "Kodemia API v1"
server.get('/', (req, res) => {
    res.json({
        message: "Kodemia APIv1"
    })
})

// GET /koders --> Endpoint
server.get('/koders',(req,res)=>{

    try {
        const koders = kodersUseCase.getAll()
        res.json({
            message:"All koders",
            data:{
                koders:koders,
            }
        })
    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error:error.message
        })
    }

})

server.post('/koders',(req,res)=>{
    try {
        const newKoder = req.body
        const koders = kodersUseCase.add(newKoder)

        res.json({
            message:"koder added",
            data:{koders}
        })

    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error:error.message
        })
    }
})

server.delete('/koders',(req,res)=>{
    try {
        const koders = kodersUseCase.deleteAll()
        res.json({
            message:"All koders deleted",
            data:{
                koders
            }
        })
    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error:error.message
        })
    }
})

server.delete('/koders/:name',(req,res)=>{
    try { 
        const name = req.params.name
        const koders = kodersUseCase.deleteByName(name)

        res.json({
            message:"Koder deleted",
            data:{
                koders:koders
            },
        })

    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error:error.message
        })
    }
})


module.exports = server
