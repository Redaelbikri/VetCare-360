const Animal = require('../models/Animale');

exports.getAll = async (req, res) => {
  try {
    const animaux = await Animal.find().populate('proprietaire');
    res.json(animaux);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
