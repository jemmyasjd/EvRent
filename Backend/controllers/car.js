const Car = require('../models/car');

async function createCars(req, res) {
  try {
    const cars = req.body; // assuming an array of car objects
    await Car.insertMany(cars);
    res.json({ message: 'Cars inserted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getCars(req, res) {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { createCars, getCars };
