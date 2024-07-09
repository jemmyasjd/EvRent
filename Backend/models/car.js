const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  gps: {
    type: String,
    required: true,
  },
  seatType: {
    type: String,
    required: true,
  },
  automatic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
