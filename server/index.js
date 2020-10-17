const express = require('express');
const app = require('./app');

// Port 3003 corresponds to Photo Carousel Module from the original server
const port = 3003;

app.listen(port, () => {
  console.log('server started on http://localhost:' + port);
});