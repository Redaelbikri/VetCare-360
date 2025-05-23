const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("API VetCare360 fonctionne !");
});
const veterinaireController = require('../controllers/veterinaireController');
const animalController = require('../controllers/animalController');
const visiteController = require('../controllers/visiteController');
const proprietaireController = require('../controllers/proprietaireController');

router.get('/animaux/proprietaire/:id', animalController.findByProprietaire);
router.get('/proprietaires/:id', proprietaireController.findById);
router.get('/proprietaires', proprietaireController.findByNom);
router.get('/proprietaires', proprietaireController.getAll);
router.post('/proprietaires', proprietaireController.create);
router.get('/veterinaires', veterinaireController.getAll);
router.get('/animals/:id', animalController.findById);
router.get('/animaux', animalController.getAll);
router.post('/animaux', animalController.create);
router.get('/visites', visiteController.getAll);
router.post('/visites', visiteController.create);
router.get('/visites/:id', visiteController.getByAnimalId);

module.exports = router;