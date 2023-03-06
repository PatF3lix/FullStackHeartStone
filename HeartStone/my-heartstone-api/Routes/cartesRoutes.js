'use strict';
// Ce Module est responsable pour la gestion des EndPoints du côter-server.
// Pour que l'application client puisse consomer les service crud Offert. 
const express = require('express');
const cartesController = require('../Controller/cartesConrtoler');
const router = express.Router();

const { getDataCartes, getDataCarte, créeCarte, updateCarte, deleteCarte} = cartesController;

router.get('/GetCartes', getDataCartes);
router.get('/GetCarte/:id', getDataCarte);
router.post('/AjouterCarte', créeCarte);
router.put('/UpdateCarte/:id', updateCarte);
router.delete('/DeleteCarte/:id', deleteCarte);

module.exports = {
    routes: router
}