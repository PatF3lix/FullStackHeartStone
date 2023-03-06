'use strict'
// Ce Module est responsable pour la gestion de tout les composant nécéssaire pour batir cette application.
// Une fois que tout les composant sont crée et utiliser, l'application peut démarée correctement.
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cartesRoutes = require('./Routes/cartesRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', cartesRoutes.routes);


app.listen(config.port, () => {
    console.log('Server is running on http://localhost:' + config.port);
});
