const mongoose = require('mongoose');

const kursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Mora da ima ime']
  },
  address: {
    type: String,
    required: [true, 'Mora da ima adresa']
  },
  type: {
    type: String,
  }
});

const Kurs = mongoose.model('Kurs', kursSchema);

module.exports = Kurs;