'use strict'

// Ce module est responsable pour la gestion de toute les requetes sql nécéssaire
// Pour accomplir les Opération Crud

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

//Read
const getCartes = async () => {
try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('CartesEvents');
    const list = await pool.request().query(sqlQueries.listDeCartes);
    return list.recordset;
} catch (error) {
    return error.message;
}
};

// GET
const getCarteById = async (carteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CartesEvents');
        const carte = await pool.request().input('carteId', sql.Int, carteId).query(sqlQueries.carteById);
        return carte.recordset;
    } catch (error) {
        return error.message;
    }
};

// CREATE
const createCarte = async (carteData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CartesEvents');
        const nouvelCarte = await pool.request()
            .input('carteRareter', sql.NVarChar(50), carteData.Rareter)
            .input('carteNom', sql.NVarChar(100), carteData.Nom)
            .input('carteCout', sql.Int, carteData.Cout)
            .input('carteVie', sql.Int, carteData.Vie)
            .input('carteAttack', sql.Int, carteData.Attack)
            .query(sqlQueries.createCarte);
        return nouvelCarte.recordset;
    } catch (error) {
        return error.message;
    }
};

// PUT
const updateCarte = async (carteId, carteData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CartesEvents');
        const carteMisAJour = await pool.request()
            .input('carteRareter', sql.NVarChar(50), carteData.Rareter)
            .input('carteId', sql.Int, carteId)
            .input('carteNom', sql.NVarChar(100), carteData.Nom)
            .input('carteCout', sql.Int, carteData.Cout)
            .input('carteVie', sql.Int, carteData.Vie)
            .input('carteAttack', sql.Int, carteData.Attack)
            .query(sqlQueries.updateCarte);
        return carteMisAJour.recordset;
    } catch (error) {
        return error.message;
    }
};

// DELETE
const deleteCarte = async (carteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CartesEvents');
        const carteDeleter = await pool.request()
            .input('carteId', sql.Int, carteId)
            .query(sqlQueries.deleteCarte);
        return carteDeleter.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getCartes,
    getCarteById,
    createCarte,
    updateCarte,
    deleteCarte
}