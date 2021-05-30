const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const PORT =    process.env.port || 5000
const io = socketio(server)
server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dict = new Map()

io.on('connection', socket => {
    console.log('New Connection')
})


app.get("/",(req,res) => {
    res.status(200).send({ success: "server started" })
})

app.get("/:key",(req,res) => {
    const value = dict.get(req.params.key)

    if(value){
        res.status(200).send({ success: value }) 
    } else {
        res.status(400).send({ error: `key value ${req.params.key} does not exist` })
    }

}) 

app.post("/",(req,res) => {
    if(!req.body.key || !req.body.value){
        res.status(400).send({ error: `Missing key or value` })
    }
    dict.set(req.body.key,req.body.value)
    io.sockets.emit("keyupdate", req.body);
    res.status(200).send({ success: `Success` })
})