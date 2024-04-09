const {connectDB} = require('./connection.jsx');
const express = require('express');
const cors = require('cors');
const contactRouter = require('./routers/contact');

const app = express();

connectDB('mongodb+srv://jemmy33jd:Mongodb.33@cluster0.1auwi0e.mongodb.net/contact_db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/contact/add', contactRouter)


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});