const express = require('express');
const consign = require('consign');
const path = require('path')
const cors = require('cors');
const database = require('./config/database');


const app = express();
app.use(cors({origin: 'http://localhost:4200'}));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client/dist'))); // Point static path to dis

database(app)

consign({ cwd: 'modules' })
    .include('api/')
    .into(app);

// Provide static directory for frontend

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client/dist/index.html'));
});

app.listen(3000, () => {
    console.log("Servidor rodando on http://localhost:3000/")
})
