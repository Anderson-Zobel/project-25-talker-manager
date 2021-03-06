const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const validateLogin = [
  middlewares.validateEmail,
  middlewares.validatePass,
];

const validateTalker = [
  middlewares.validateTalkerToken,
  middlewares.validateTalkerName,
  middlewares.validateTalkerAge,
  middlewares.validateTalkerTalk,
  middlewares.validateTalkerWatchedAt,
  middlewares.validateTalkerRate,  
];

// CREATE
app.post(
  '/login',
  validateLogin,
  middlewares.token,
  );

app.post(
  '/talker',
  validateTalker,
  controllers.postTalker,
);

// READ

app.get(
  '/talker',
  controllers.getTalker,
);

app.get(
  '/talker/search',
  middlewares.validateTalkerToken,
  controllers.queryTalker,
);

app.get(
  '/talker/:id',
  controllers.getTalkerById,
);

// UPDATE
app.put(
  '/talker/:id',
  validateTalker,
  controllers.putTalker,
  );

// DELETE
app.delete(
  '/talker/:id',
  middlewares.validateTalkerToken,
  controllers.deleteTalker,
);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(middlewares.handleError)

app.listen(PORT, () => {
  console.log('Online');
});
