//inserting data in mongo
use ajaykart

db.items.insertOne({ name: "Samsung s1", price: 23000, rating: 4.5, qty: 233, sold: 98 })

db.items.insertMany([{ name: "Samsung s1", price: 23000, rating: 4.5, qty: 233, sold: 98 }, { name: "vivo s1", price: 30000, rating: 4.5, qty: 433, sold: 198 }, { name: "iphone", price: 123000, rating: 4.5, qty: 2331, sold: 981 }, { name: "motorola", price: 35000, rating: 4.5, qty: 733, sold: 118 }])