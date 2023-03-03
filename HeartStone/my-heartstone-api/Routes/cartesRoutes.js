'use strict';

const express = require('express');
const cartesController = require('../Controller/cartesConrtoler');
const { getCarteById } = require('../Data/CartesEvents');
const router = express.Router();

const { getDataCartes, getDataCarte} = cartesController;

router.get('/Cartes', getDataCartes);
router.get('/Carte/:id', getDataCarte);

module.exports = {
    routes: router
}