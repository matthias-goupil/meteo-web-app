require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./src/router')

const port = process.env.PORT;

// Middleware pour traiter les requêtes JSON
app.use(express.json());

app.use('/api', router)

// Endpoint de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre API Express !');
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});