const port = 3003

const bodyParser = require('body-parser')

const express = require('express')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    var data = new Date()
    data = data.toLocaleString()
    console.log(`BACKEND is running on port ${port}. data: ${data}`)
})

module.exports = server

// server.use(function(req, res, next){
//     console.log('Meu middleware 1')
//     next()
// })

// server.use(function(req, res, next){
//     console.log('Meu middleware 2')
//     res.send('Funcionou novamente!!!')
// })