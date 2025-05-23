const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de Stock IT !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
