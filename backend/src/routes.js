const express = require('express')
const requestIp = require('request-ip');
const routes = new express.Router()
const Lead = require('./models/Lead')

routes.get('/', (req, res)=>{
    res.sendFile(__dirname+'/blog.html')
})
routes.post('/addLead', (req, res)=>{
    const { name, email, ip } = req.body
    const lead = Lead.create({ name, email, ip})
    res.send('lead adicionado, ' + lead)
    //res.send(ip)
})
routes.post('/postLead', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})
routes.get('/leads.csv', (req, res)=>{
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment; filename=\"'+'leads.csv\"')
    Lead.csv((data) =>{
        res.send(data)
    })
})
routes.get('/leads', (req, res)=>{
    
    Lead.json((data) =>{
        res.send(data)
    })
})
module.exports = routes