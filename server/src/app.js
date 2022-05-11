const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()

const PORT = process.env.PORT ||5000

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req,  res)=>{
    res.send('hello')
})

app.listen(PORT, ()=>{
    console.log(`App run on http://localhost:${PORT}`);
})
