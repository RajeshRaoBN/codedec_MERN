const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const dog = require('./models/dogSchema')

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB is now connected'))
.catch((err) => console.log(`There is an error in the DB connection ${err}`))

dog.create({
    name: 'Wolfy',
    age: 7,
    breed: 'Husky'
}, (err, dog) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Successfully created")
    }
})

dog.find({}, (err, dogList) => {
    if(err) {
        console.log(err)
    } else {
        console.log(dogList)
    }
})

app.get('/', (req, res) => {
    res.send('Welcome to express')
})

app.listen(port, () => console.log(`App is listning on port ${port}`))

