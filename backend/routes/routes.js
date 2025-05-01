const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("API VetCare360 fonctionne !");
});
const veterinaireController = require('../controllers/veterinaireController');
const animalController = require('../controllers/animalController');
const visiteController = require('../controllers/visiteController');
const proprietaireController = require('../controllers/proprietaireController');


router.get('/proprietaires', proprietaireController.getAll);
router.post('/proprietaires', proprietaireController.create);
router.get('/veterinaires', veterinaireController.getAll);
router.get('/animaux', animalController.getAll);
router.post('/animaux', animalController.create);
router.get('/visites', visiteController.getAll);
router.post('/visites', visiteController.create);


module.exports = router;