const mongoose = require('mongoose');

const materielSchema = new mongoose.Schema({
    nom: String,
    reference: String,
    prix: Number,
    modele: String,
    marque: String,
    description: String,
}, { collection: 'col_materiels' }); 

module.exports = mongoose.model('Materiel', materielSchema);
