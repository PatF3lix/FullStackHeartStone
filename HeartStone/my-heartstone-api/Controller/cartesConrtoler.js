'use strict';

const carteData = require('../Data/CartesEvents');

const getDataCartes = async (req, res, next) => {
    try {
        const cartes = await carteData.getCartes();
        res.send(cartes);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDataCartes
}