require('dotenv').config();
const pathing = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const routing = require('./router');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(pathing.join(__dirname, '../client/dist')));
app.use('/', routing);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

