const io = require('socket.io')(9090)

try{
io.on('connection', socket =>
{
    socket.on('MiProyecto', data =>{

        socket.join(data.hashID)
       console.log(`conectado a:${data.hashID}`)
       console.log(`mensaje enviado:${data.mensaje}`)
       
    
        
     io.to(data.hashID).emit('stats',data.mensaje)


    })
    console.log('Client connected')

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
})
console.log("ok")
}catch(err)
{
    console.log(err)
}