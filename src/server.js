const express = require('express')
const server = express()
const route = require('./route')
const path = require('path')

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(5555, () => console.log("Servidor rodando na porta 5555") )