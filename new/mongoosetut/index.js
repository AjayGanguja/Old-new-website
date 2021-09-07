const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ajaykart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function () {
//    console.log("we are connected bro...")
// });

const kittySchema = new mongoose.Schema({
   name: String
});

kittySchema.methods.speak = function () {
   const greeting = "My name is " + this.name
  console.log(greeting);
 }

const Kitten = mongoose.model('ajaykitty', kittySchema);

const ajaykitty = new Kitten({ name: 'Ajaykitty' });
// console.log(ajaykitty.name); 
// ajaykitty.speak()

ajaykitty.save(function (err, ajaykitty) {
   if (err) return console.error(err);
   // ajaykitty.speak();
 });

 Kitten.find(function (err, kittens) {
   if (err) return console.error(err);
   console.log(kittens);
 })