const hbs = require('hbs');
const express = require('express');
require('dotenv').config()




const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');






app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.render('home',{
    nombre:'santiago quintero',
    titulo:'marketing digital'
  })
})


app.get('/generic', (req, res) =>{
  res.render('generic',{
    nombre:'santiago quintero',
    titulo:'marketing digital'})
})
app.get('/elements', (req, res) =>{
  res.render('elements',{
    nombre:'santiago quintero',
    titulo:'marketing digital'})
})

app.get('*', (req, res) =>{
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})