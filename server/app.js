const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Schema');
const PORT = 5000;
const Schema = mongoose.model('Schema');
const mongouri =
  ' mongodb+srv://seshaprasan3113:gundatii3113@cluster0-us3z3.mongodb.net/WordApp?retryWrites=true&w=majority';

app.use(bodyParser.json());
mongoose.connect(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});
mongoose.connection.on('error', err => {
  console.log('error', err);
});

app.get('/', (req, res) => {
  res.send('welcome');
});
app.listen(PORT, () => {
  console.log('server is running on', PORT);
});

app.post('/send-data', (req, res) => {
  const word = new Schema({
    date: req.body.date,
    month: req.body.month,
    word: req.body.word,
    definition: req.body.definition,
    example: req.body.example,
  });
  word.save().then(data => console.log(data));
  res.send(this.data);
});

// app.post('/getword', (req, res) => {
//   const {date, month} = req.body;
//   Schema.findOne({date: date}).then(data => {
//     res.send('data');
//   });
// });

app.post('/getword', (req, res) => {
  const {date, month} = req.body;
  // this.date = date.json();
  console.log(typeof date);
  console.log('month is now', month);
  Schema.findOne({date: date, month: month}).then(savedUser => {
    if (savedUser) {
      // savedUser = savedUser.json();
      console.log(typeof savedUser);
      if (date === savedUser.date) {
        console.log('match');
        res.send(savedUser.date);
      } else {
        console.log('not matched');
        res.send(savedUser);
      }
    } else {
      res.status(422).json('0');
    }
  });
});
