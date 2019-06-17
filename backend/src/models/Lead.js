const firebase = require('../firebase')
const stringify = require('csv-stringify')

const create = ({ name, email, ip }) => {
    const leads = firebase.database().ref('leads')
    const lead = leads.push({ name, email, ip })
    return lead
}
const csv = (cb) =>{
    const leads = firebase.database().ref('leads')
    const data =[['id', 'name', 'email', 'user-ip']]
    leads.on('value', (snapshot)=>{
        snapshot.forEach((lead)=>{
            const { name, email, ip} = lead.val()
            data.push([lead.key, name, email, ip])
        })
        stringify(data, (err, output) => {
            cb(output)
        })
    })
}
const json = (cb) =>{
    const leads = firebase.database().ref('leads')
    const data =[['id', 'name', 'email', 'user-ip']]
    leads.on('value', (snapshot)=>{
        snapshot.forEach((lead)=>{
            const { name, email, ip} = lead.val()
            data.push([lead.key, name, email, ip])
        })
        
        cb(data)
        
    })
}
module.exports = {
    create, csv, json
}