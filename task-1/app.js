const express = require('express');
const morgan = require('morgan');

const akademijaHandler = require('./handlers/akademijaHandler');
const kursHandler = require('./handlers/kursHandler');
const viewHandler = require('./handlers/viewHandler');

const DB = require('./pkg/db/index');


const app = express();

DB.database();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

//ruti za api akademija
app.get('/api/akademija', akademijaHandler.allAcademys);
app.get('/api/akademija/:id', akademijaHandler.oneAcademy);

app.post('/api/akademija', akademijaHandler.createAcademy);
app.patch('/api/akademija/:id', akademijaHandler.updateAcademy);
app.delete('/api/akademija/:id', akademijaHandler.deleteAcademy);

//ruti za api kurs
app.get('/api/kurs', kursHandler.allKurs);
app.get('/api/kurs/:id', kursHandler.oneKurs);

app.post('/api/kurs', kursHandler.createKurs);
app.patch('/api/kurs/:id', kursHandler.updateKurs);
app.delete('/api/kurs/:id', kursHandler.deleteKurs);

//ruti za veb sajt - test
app.get('/test', viewHandler.getWebsite);






app.listen(process.env.PORT, err => {
  if (err) return console.log(err);
  console.log('Servisot e online');
});



