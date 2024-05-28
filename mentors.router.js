const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
    res.json({
        message :"all mentors"
    })
})

module.exports= router