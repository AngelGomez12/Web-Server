const express = require('express');
const Bhaskara = require('./user.controller');
const app = express()
const port = 3000

app.get('/users', Bhaskara.pasos)
app.post('/users', Bhaskara.create)
app.put('/users/:id', Bhaskara.update)
app.get('/users/:id', Bhaskara.get)
app.patch('/users/:id', Bhaskara.update)
app.delete('/users/:id', Bhaskara.destroy)

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicacion');
})