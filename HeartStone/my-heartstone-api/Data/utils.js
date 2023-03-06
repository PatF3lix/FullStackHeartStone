'use strict'

const fs = require('fs-extra');
/*La méthode path.join() joint les segments de chemin spécifiés en un seul chemin.
Vous pouvez spécifier autant de segments de chemin que vous le souhaitez.
Les segments de chemin spécifiés doivent être des chaînes, séparées par une virgule. */
const { join } = require('path');

const loadSqlQueries = async (folderName) => {
    // Les fichier a joindre seront tous les fichier sql dans le repertoire Data/CartesEvents
    const filePath = join(process.cwd(), 'data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = await files.filter(f => f.endsWith('.sql'));
    const queries = {};

    for (const sqlFile of sqlFiles) {
        const query = await fs.readFileSync(join(filePath, sqlFile), { encoding: "UTF-8" });
        queries[sqlFile.replace(".sql", "")] = query;
    }
    return queries;
}

module.exports = {
    loadSqlQueries
}