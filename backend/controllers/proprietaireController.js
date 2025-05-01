const Proprietaire = require('../models/proprietaire');

exports.getAll = async (req, res) => {
  try {
    const proprietaires = await Proprietaire.find();
    res.json(proprietaires);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.create = async (req, res) => {
  try {
    const newProp = new Proprietaire(req.body);
    await newProp.save();
    res.status(201).json(newProp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
