const Veterinaire = require('../models/veterinaire');

exports.getAllVets = async (req, res) => {
  try {
    const vets = await Veterinaire.find();
    res.status(200).json(vets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
