// Initialiser Express
const express = require('express');
const app = express();
// Créer la variable serveur
const server = require('http').Server(app);

// Require le package Next
const next = require('next');

// Créer des variables de développement
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler()
require('dotenv').config({ path: "./config.env" })
const connectDB = require('./utilsServer/connectDB')
const PORT = process.env.PORT || 3000 // pour le futur déploiement
app.use(express.json()); // le body-parser
connectDB();

// Le serveur et l'app run sur le même port (thanks to Next.js!)

nextApp.prepare().then(() => {
    // Create routes
    app.use('/api/signup', require('./api/signup'))
    app.use('/api/auth', require('./api/auth'))

    app.all('*', (req, res) => handle(req, res)); // pour faire fonctionner le dossier "pages"

    server.listen(PORT, error => {
        if (error) throw error;
        console.log(`Express server running on ${PORT}`);
    })
})