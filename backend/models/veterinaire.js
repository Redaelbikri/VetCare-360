const mongoose = require('mongoose');

const veterinaireSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialties: [String],
}, { timestamps: true });

module.exports = mongoose.model('Veterinaire', veterinaireSchema);
