// searching for data in mongo
// use ajaykart

//this query will returns all the objects with qty equal to 233
db.items.find({qty:233})
db.items.find({qty : {$gte: 233}})
db.items.find({qty : {$gt: 233}})
//and operator
db.items.find ({qty : {$gt: 233}, price:{$gt:23000}})
//lesser than
db.items.find ({qty : {$lt:733}, price:{$lt:1113000}})
//or operator
db.items.find ({$or:[{rating:{$lt:4.5}},{price:{$lt:1113000}}]}) 

db.items.deleteOne({qty:233})
db.items.deleteMany({qty:233})

db.items.updateOne({name:"vivo s1"} , {$set:{price:3}})
db.items.updateMany({name:"iphone"} , {$set:{price:3 , rating:1}})