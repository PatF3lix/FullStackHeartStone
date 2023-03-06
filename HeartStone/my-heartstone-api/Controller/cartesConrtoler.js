'use strict';

const carteData = require('../data/CartesEvents');
// Ce Modules est le controller de mon application coter server
// il est responsable de toutes les operation crud

// GET
const getDataCartes = async (req, res, next) => {
    try {
        const cartes = await carteData.getCartes();
        res.send(cartes);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// GET
const getDataCarte = async (req, res, next) => {
    try {
        const carteId = req.params.id;
        const carte = await carteData.getCarteById(carteId);
        res.send(carte);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// CREATE
const créeCarte = async (req, res, next) => {
    try {
        const dataNouvelCarte = req.body;
        const nouvelCarte = await carteData.createCarte(dataNouvelCarte);
        res.send(nouvelCarte);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// PUT
const updateCarte = async (req, res, next) => {
    try {
        const carteId = req.params.id;
        const dataCarteUpdate = req.body;
        const carteMisAJour = await carteData.updateCarte(carteId, dataCarteUpdate);
        res.send(carteMisAJour);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// DELETE
const deleteCarte = async (req, res, next) => {
    try {
        const carteId = req.params.id;
        const carteDeleter = await carteData.deleteCarte(carteId);
        res.send(carteDeleter);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getDataCartes,
    getDataCarte,
    créeCarte,
    updateCarte,
    deleteCarte
}