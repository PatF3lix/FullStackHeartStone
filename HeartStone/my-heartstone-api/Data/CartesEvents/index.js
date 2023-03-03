'use strict'

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

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
        console.log(nouvelCarte);
        return nouvelCarte.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCartes,
    getCarteById,
    createCarte
}