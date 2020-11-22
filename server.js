const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
require('dotenv').config();

// view engine
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Mongodb connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true
})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err.message))

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => { console.log('listening at http://localhost:' + PORT)});