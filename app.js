const express = require('express');
const api = require('./src/api');
const notFoundMiddleware = require('./src/api/middleware/not-found');
const errorMiddleware = require('./src/api/middleware/error');

const app = express();

app.use(express.json());

app.use('/api', api);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port);
