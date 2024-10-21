const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 1920;

const middlewares = [
  express.json(),
  cors(),
  helmet(),
  morgan('dev'),
];

middlewares.forEach((middleware) => app.use(middleware));

app.use('/', routes);

app.listen(PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${PORT}...`)
);