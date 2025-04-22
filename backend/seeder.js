const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Veterinaire = require('./models/veterinaire');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedVets = async () => {
  await Veterinaire.deleteMany();

  await Veterinaire.insertMany([
    { firstName: "James", lastName: "Carter", specialties: [] },
    { firstName: "Linda", lastName: "Douglas", specialties: ["Dentistry", "Surgery"] },
    { firstName: "Sharon", lastName: "Jenkins", specialties: [] },
    { firstName: "Helen", lastName: "Leary", specialties: ["Radiology"] },
    { firstName: "Rafael", lastName: "Ortega", specialties: ["Surgery"] },
    { firstName: "Henry", lastName: "Stevens", specialties: ["Radiology"] },
  ]);

  console.log("✅ Données vétérinaires insérées !");
  mongoose.connection.close();
};

seedVets();
