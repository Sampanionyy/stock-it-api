// routes/materiels.routes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/materiel.controller');

// 1. Tous les matériels
router.get('/', ctrl.getAllMateriels);

// 2. Matériel par référence
router.get('/reference/:reference', ctrl.getMaterielByReference);

// 3. Recherche par mot-clé dans la description
// Ex: GET /materiels/search?mot=ssd
router.get('/search', ctrl.searchMaterielByDescription);

// 4. Création
router.post('/', ctrl.createMateriel);

// 5. Mise à jour (par ID)
router.put('/:id', ctrl.updateMateriel);

// 6. Suppression (par ID)
router.delete('/:id', ctrl.deleteMateriel);

module.exports = router;
