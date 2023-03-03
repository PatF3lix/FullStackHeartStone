'use strict';

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