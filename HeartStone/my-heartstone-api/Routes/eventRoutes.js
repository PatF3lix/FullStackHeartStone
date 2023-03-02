'use strict';

const express = require('express');
const eventController = require('../Controller/eventConrtoler');
const router = express.Router();

const { getEvents} = eventController;

router.get('/cartes', getEvents);

module.exports = {
    routes: router
}