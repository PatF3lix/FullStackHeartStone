'use strict';

const express = require('express');
const eventController = require('../Controller/eventConrtoler');
const router = express.Router();

const { getCartes} = eventController;

router.get('/cartes', getCartes);

module.exports = {
    routes: router
}