const mongoose = require('mongoose');

const proprietaireSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },  // Ajouté
  ville: { type: String, required: true },    // Ajouté
}, { timestamps: true });

module.exports = mongoose.model('Proprietaire', proprietaireSchema);