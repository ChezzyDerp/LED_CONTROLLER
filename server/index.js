const express = require('express')
const bodyParser = require('body-parser')

const COM = 'COM4'

const app = express()
const SerialPort = require('serialport')
const serialPort = new SerialPort(COM, {
    baudRate: 9600
})


const port = 5000

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server listening on ${port} port...`)
    console.log(`Now select is ${COM} port, edit if it not work.`)
})

app.post("/set_mode", (req, res) => {
    let mode = req.body.mode
    serialPort.write(mode)
    res.sendStatus(200)
    console.log(`Mode led was is edit. Mode - ${mode}\n`)
})