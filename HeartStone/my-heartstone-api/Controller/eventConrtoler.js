'use strict';

const eventData = require('../data/Events');

const getCartes = async (req, res, next) => {
    try {
        const cartes = await eventData.getCartes();
        res.send(cartes);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCartes
}