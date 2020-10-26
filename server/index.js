const express = require('express');
const app = require('./app');

// Port 3002 corresponds to ProductReview Module from the original server
const port = 3002;

app.listen(port, () => {
  console.log('server started on http://localhost:' + port);
});