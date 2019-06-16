const express = require('express')
const routes = new express.Router()
const Lead = require('./models/Lead')

routes.get('/', (req, res)=>{
    res.sendFile(__dirname+'/blog.html')
})
routes.post('/addLead', (req, res)=>{
    const { name } = req.body
    const lead = Lead.create({ name })
    res.send('lead adicionado, ' + lead)
})

module.exports = routes