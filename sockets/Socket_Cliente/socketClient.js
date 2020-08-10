require('dotenv').config()
var express = require('express');
const app = express()
const bodyParser = require('body-parser')
const
    io = require("socket.io-client"),
    ioClient = io.connect(process.env.ENDPOINT);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/socketcliente', function respuesta(req,res){

    try{
    ioClient.emit('recibe',{mensaje:req.body.mensaje})
    res.status(200).send({mensaje:"MENSAJE ENTREGADO"})
    }catch(error){
       res.status(400).send({mensaje:'No recibido'+error}) 
    }
});

app.listen(8080, () => {

    console.log("Esta corriendo en puerto 8080")
})




