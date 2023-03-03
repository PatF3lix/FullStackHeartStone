'use strict';

const express = require('express');
const cartesController = require('../Controller/cartesConrtoler');
const router = express.Router();

const { getDataCartes} = cartesController;

router.get('/getDataCartes', getDataCartes);

module.exports = {
    routes: router
}