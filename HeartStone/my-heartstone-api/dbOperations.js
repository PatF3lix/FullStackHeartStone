const config = require("./dbConfig");
const sql = require("mssql");

async function getCartes() {
    try {
        let pool = await sql.connect(config);
        console.log("sql server connected...");
    } catch (error) {
        console.log("mathus-error :" + error);
    }
}

module.exports = {
    getCartes : getCartes,
}