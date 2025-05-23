const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 7000;

// Connexion à la base
require('./database'); // Ton fichier database.js

// Middleware JSON
app.use(express.json());

// Import des routes
const materielsRoutes = require('./src/routes/materiel.routes');

// Routes
app.use('/api/materiels', materielsRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'application cliente !');
});

app.listen(port, () => {
    console.log(`🚀 Serveur lancé sur le port ${port}`);
});
