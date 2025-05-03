const Animal = require('../models/animale');

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

exports.findByProprietaire = async (req, res) => {
  try {
    const proprietaireId = req.params.id;

    const animaux = await Animal.find({ proprietaire: proprietaireId }).populate('proprietaire');

    if (!animaux || animaux.length === 0) {
      return res.status(404).json({ message: "Aucun animal trouvé pour ce propriétaire." });
    }

    res.json(animaux);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
