'use strict';

const carteData = require('../Data/CartesEvents');

const getDataCartes = async (req, res, next) => {
    try {
        const cartes = await carteData.getCartes();
        res.send(cartes);

    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getDataCarte = async (req, res, next) => {
    try {
        const carteId = req.params.id;
        const carte = await carteData.getCarteById(carteId);
        res.send(carte);

    } catch (error) {
        res.status(400).send(error.message);
    }
};

const créeCarte = async (req, res, next) => {
    try {
            const dataNouvelCarte = req.body;
            const nouvelCarte = await carteData.createCarte(dataNouvelCarte);
            console.log(nouvelCarte);
            res.send(nouvelCarte);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDataCartes,
    getDataCarte,
    créeCarte,
}