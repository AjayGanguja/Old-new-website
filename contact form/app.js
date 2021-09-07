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
    email :String,
    message : String
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
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/about', (req, res)=>{
    const params = { }
    res.status(200).render('about.pug', params);
})
app.get('/social', (req, res)=>{
    const params = { }
    res.status(200).render('social.pug', params);
})
app.get('/visit', (req, res)=>{
    const params = { }
    res.status(200).render('visit.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res)=>{
var myData = new contact (req.body);
myData.save().then(()=>{
    res.send("This item has been saved to the database")
}).catch(()=>{
       res.status(400).send("Items was not saved to the database");
    //    res.status(200).render('contact.pug');
});
// res.rendered 
});
// STARTS THE SERVER
app.listen(port, () => {
    console.log('The Application Started Succesfully on port ${port}');
});