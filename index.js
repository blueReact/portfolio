const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./routes/routes');

// static assets
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(port, function () {
  console.log('Server is listening on port', 3000);
});