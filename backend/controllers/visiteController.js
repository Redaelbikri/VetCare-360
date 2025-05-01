const Visite = require('../models/Visite');

exports.getAll = async (req, res) => {
  try {
    const visites = await Visite.find()
      .populate('animal')
      .populate('veterinaire');
    res.json(visites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newVisite = new Visite(req.body);
    await newVisite.save();
    res.status(201).json(newVisite);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
