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

exports.findByNom = async (req, res) => {
  const nomRecherche = req.query.nom;
  if (!nomRecherche) {
    console.log("Nom de recherche non fourni");
  }
  else {
    console.log("Nom de recherche fourni : " + nomRecherche);
  }
  try {
    const resultat = await Proprietaire.find({
      nom: { $regex: nomRecherche, $options: 'i' }
    });
    res.json(resultat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  console.log("Fin de la recherche par nom");
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const proprietaire = await Proprietaire.findById(id);
    if (!proprietaire) {
      return res.status(404).json({ message: 'Propriétaire non trouvé' });
    }
    res.json(proprietaire);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};