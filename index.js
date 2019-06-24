const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./routes/routes');


// compress all responses
app.use(compression());

app.use(helmet());

// static assets
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(port, function () {
  console.log('Server is listening on port', 3000);
});