'use strict';

const express = require('express');
const cartesController = require('../Controller/cartesConrtoler');
const { getCarteById } = require('../Data/CartesEvents');
const router = express.Router();

const { getDataCartes, getDataCarte, créeCarte} = cartesController;

router.get('/GetCartes', getDataCartes);
router.get('/GetCarte/:id', getDataCarte);
router.post('/AjouterCarte', créeCarte);

module.exports = {
    routes: router
}