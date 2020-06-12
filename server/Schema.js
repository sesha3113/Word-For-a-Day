const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  date: String,
  month: String,
  word: String,
  definition: String,
  example: String,
});

mongoose.model('Schema', Schema);
