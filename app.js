const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/views/home.html')
  })
app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
  })
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html')
  })
app.get('/cake', (req, res) => {
    res.send('Hello cake!')
})
app.get('/cake/ahmedabad', (req, res) => {
    res.send('Hello cake ahmedabad!')
})
app.get('/cake/baroda', (req, res) => {
    res.send('Hello cake baroda!')
})
app.get('/cake/surat', (req, res) => {
    res.send('Hello cake surat!')
})  
      
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})