const express = require('express')
require('dotenv').config()

const app = express()

app.get('/',(req, res) =>{
  
    console.log('Petecion recibida')

    res.send('<h1>HOLA MUNDO</h1>')
})

const PORT=process.env.PORT || 3000
 
app.listen(PORT,()=>{

    console.log('Sevidor escuchando ${PORT}')
})