/* IN */
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const psql = require('./psql.js');

const app = express();

/* OPTIONS */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/listing/:_id', express.static(path.join(__dirname, '/../dist')));

/* ENDPOINTS */
// Create
app.post('/api/listing', (req, res) => {
  // res.send(`create a listing`);
  psql.createProduct();
  res.end();
});

// Read
app.get('/api/listing/:_id', (req, res) => {
  // res.send(`read listing #${req.params._id}`);
  psql.readProduct()
  res.end();
});

// Update
app.put('/api/listing/:_id', (req, res) => {
  // TODO: implement real thing
  res.send(`update listing #${$req.params._id}`);
});

// Delete
app.delete('/api/listing/:id', (req, res) => {
  // TODO: implement real thing
  res.send(`delete listing #${req.params._id}`);
});

/* OUT */
module.exports = app;