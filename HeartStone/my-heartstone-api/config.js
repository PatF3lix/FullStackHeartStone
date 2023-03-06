'use strict';
// Ce Module est Responsable Pour la configuration de la connection 
// à la base de donnée Sql Server
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url:HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,     
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true,
            trustedconnection: true,
            instancename: ""
        }
    }
}