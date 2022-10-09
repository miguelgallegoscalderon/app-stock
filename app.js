const express = require('express')
const app = express()

app.get('/',(req, res) =>{
  
    console.log('Petecion recibida')

    res.send('<h1>Hello! con NODEMON</h1>')
})
app.listen(3000,()=>{

    console.log('Sevidor escuchando 3000')
})