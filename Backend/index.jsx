const {connectDB} = require('./connection.jsx');
const express = require('express');
const cors = require('cors');
const contactRouter = require('./routers/contact');

const app = express();

connectDB('mongodb://localhost:27017/ContactDB');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/contact/add', contactRouter)


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});