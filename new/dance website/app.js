const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost/ContactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 8000;

// define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone :String,
    email : String,
    contact :String
  });

  const contact = mongoose.model('Kitten', contactSchema);

// EXPRESS SPECIFIT STUFF
app.use('/static' , express.static('static'))// for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res)=>{
var mydata = new contact (req, body);
mydata.save().then(()=>{
    res.send("This item has been saved to the database")
}).catch(()=>{
       res.status(400).send("Items was not saved to the database");
});

// res.rendered 
});
// STARTS THE SERVER
app.listen(port, () => {
    console.log('The Application Started Succesfully on port ${port}');
});