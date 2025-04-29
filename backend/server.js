const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/vetcare360', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("Erreur de connexion MongoDB:", err));

const Proprietaire = require('./models/propietaire'); // modèle mongoose
app.use(express.json()); // katkhlina nakhdo json data mrta7in l req.body
app.post("/proprietaires", async (req, res) => {
  const data = req.body;

  if (!data.name || !data.prenom || !data.telephone || !data.adresse || !data.ville) {
    return res.status(400).json({ success: false, message: "🛑 Remplis tous les champs !" });
  }

  try {
    const newProprietaire = new Proprietaire(data);
    await newProprietaire.save();
    res.status(201).json({ success: true, message: "✅ Propriétaire créé avec succès" });
  } catch (err) {
    res.status(500).json({ success: false, message: "❌ Erreur lors de la création du propriétaire", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
