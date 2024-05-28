const kodersUseCase = require('./koders.usecase')
const express = require('express')
//Crear un nuevo Router en express
//El router debe ser montado en koders por lo que todas las rutas van a ser relativas
const router = express.Router()

router.use((req, res, next) => {
    console.log('middleware a nivel de router (koders)')
    next()
})

// GET /koders --> Endpoint
router.get('/', (req, res, next) => {
    console.log('middleware a nivel de ruta(get a koders)',req.isAWizzard)
    next()
},
    (req, res) => {

        try {
            const koders = kodersUseCase.getAll()
            res.json({
                message: "All koders",
                data: {
                    koders: koders,
                }
            })
        } catch (error) {
            res.status(error.status || 500)

            res.json({
                //Por defecto muestra el error que está definido 
                error: error.message
            })
        }

    })

router.post('/', (req, res) => {
    try {
        const newKoder = req.body
        const koders = kodersUseCase.add(newKoder)

        res.json({
            message: "koder added",
            data: { koders }
        })

    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error: error.message
        })
    }
})

router.delete('/', (req, res) => {
    try {
        const koders = kodersUseCase.deleteAll()
        res.json({
            message: "All koders deleted",
            data: {
                koders
            }
        })
    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error: error.message
        })
    }
})

router.delete('/:name', (req, res) => {
    try {
        const name = req.params.name
        const koders = kodersUseCase.deleteByName(name)

        res.json({
            message: "Koder deleted",
            data: {
                koders: koders
            },
        })

    } catch (error) {
        res.status(error.status || 500)

        res.json({
            //Por defecto muestra el error que está definido 
            error: error.message
        })
    }
})

module.exports = router