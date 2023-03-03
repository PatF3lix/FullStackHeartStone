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
}

const getCarteById = async (carteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('CartesEvents');
        const carte = await pool.request().input('carteId', sql.Int, carteId).query(sqlQueries.carteById);
        console.log(carte.recordset);
        return carte.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCartes,
    getCarteById
}