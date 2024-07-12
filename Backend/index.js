const {connectDB} = require('./connection.js');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactRouter = require('./routers/contact.js');
const carRoutes = require('./routers/car.js');


const app = express();
const PORT = process.env.PORT || 5000;


connectDB('mongodb+srv://jemmy33jd:Mongodb.33@cluster0.1auwi0e.mongodb.net/car_db');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/contact/add', contactRouter)
app.use('/cars', carRoutes);

app.get('/',(req,res)=>{
    res.send("hello World");
})


app.listen(PORT, () => {
    console.log('Server is running');
});
