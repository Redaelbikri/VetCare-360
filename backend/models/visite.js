const mongoose = require('mongoose');

const visiteSchema = new mongoose.Schema({
  animal: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  veterinaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinaire' },
}, { timestamps: true });

module.exports = mongoose.model('Visite', visiteSchema);