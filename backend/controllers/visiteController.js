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
exports.getByAnimalId = async (req, res) => {
  try {
    const visites = await Visite.find({ animal: req.params.id }).populate('animal veterinaire');
    if (!visites || visites.length === 0) {
      return res.status(404).json({ message: "Aucune visite trouvée pour cet animal." });
    }
    res.json(visites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

