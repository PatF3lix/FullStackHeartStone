const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/getTouteLesCartes');
app.get('/getCarte/:id');
app.post('/postCarte');
app.delete('/deleteCarte/:id');
app.patch('/updateCarte');

app.listen(4000, () => {
    console.log('running on port 4000');
})