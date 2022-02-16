const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const validationMiddlewares = [
  middlewares.validateEmail,
  middlewares.validatePass,
];

// CREATE
// const token = crypto.createHash('md5').update('1234').digest('hex');

app.post(
  '/login',
  validationMiddlewares,
  middlewares.token,
  );

// READ
app.get(
  '/talker',
  controllers.getTalker,
);

app.get(
  '/talker/:id',
  controllers.getTalkerById,
);

// UPDATE

// DELETE

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
