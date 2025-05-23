const mongoose = require('mongoose');

const uri = 'mongodb+srv://sampanionyra55:pl0IXoeGtkIPnWXq@mycluster.2aeshcz.mongodb.net/dbGestionStock?retryWrites=true&w=majority&appName=mycluster';

mongoose.connect(uri)
    .then(() => console.log('✅ Connexion à MongoDB réussie !'))
    .catch(err => console.error('❌ Erreur de connexion à MongoDB :', err));

