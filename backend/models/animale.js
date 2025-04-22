const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  birthday: { type: Date, required: true },   // Date de naissance
  type: { type: String, required: true },     // Exemple : "Chien", "Chat"
  proprietaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Proprietaire', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Animal', animalSchema);