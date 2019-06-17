const express = require('express')
const routes = new express.Router()
const Lead = require('./models/Lead')

routes.get('/', (req, res)=>{
    res.sendFile(__dirname+'/blog.html')
})
routes.post('/addLead', (req, res)=>{
    const { name, email } = req.body
    const lead = Lead.create({ name, email })
    res.send('lead adicionado, ' + lead)
})
routes.get('/leads.csv', (req, res)=>{
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment; filename=\"'+'leads.csv\"')
    Lead.csv((data) =>{
        res.send(data)
    })
})

module.exports = routes