const {connectDB} = require('./connection.jsx');
const express = require('express');
const cors = require('cors');
const contactRouter = require('./routers/contact');
const carRoutes = require('./routers/car.js');

const app = express();


connectDB('mongodb+srv://jemmy33jd:Mongodb.33@cluster0.1auwi0e.mongodb.net/car_db');




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/contact/add', contactRouter)
app.use('/cars', carRoutes);

app.get('/',(req,res)=>{
    res.send("hello World");
})


app.listen(5000, () => {
    console.log('Server is running on port 3001');
});
