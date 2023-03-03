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

module.exports = {
    getCartes
}