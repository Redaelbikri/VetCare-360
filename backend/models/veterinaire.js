const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialties: [String],
});

module.exports = mongoose.model('Veterinaire', vetSchema);
