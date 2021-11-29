const express = require('express')
const bodyParser = require('body-parser')
var readline = require('readline');
let COM = 'COM4'

var rl = readline.createInterface(process.stdin, process.stdout);


const app = express()
const SerialPort = require('serialport')

function selectPort() {
    rl.setPrompt('\nSelect COM number (or press Ctrl + C to select default) : ');
    rl.prompt();
    rl.on('line', function(line) {
        if (rl == '') {
            rl.prompt();
        } else {
            COM = "COM" + line
            startServer()
        }
    }).on('close', function() {
        console.log('Selected default port (COM4)')
        process.exit(0);
    });
}

selectPort()


function startServer() {


    const serialPort = new SerialPort(COM, {
        baudRate: 9600
    })

    const port = 5000

    app.listen(port, () => { console.log(`\nServer is listening on ${port}.`) })
    app.use(bodyParser.json())
    app.use((req, res) => {
        res.header("Access-Control-Allow-Origin");
        next()
    })

    app.post("/set_mode", (req, res) => {
        let mode = req.body.mode
        try {
            serialPort.write(mode)
        } catch (error) {
            console.log('\nSomething wrong, try edit COM port.')
        }

        res.sendStatus(200)
        console.log(`Mode led was is edit. Mode - ${mode}\n`)
    })
}