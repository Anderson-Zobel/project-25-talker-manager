const handleError = require('./handleError');
const validateEmail = require('./validateEmail');
const validatePass = require('./validatePass');
const token = require('./token');
const validateTalkerToken = require('./validateTalkerToken');
const validateTalkerName = require('./validateTalkerName');
const validateTalkerAge = require('./validateTalkerAge');
const validateTalkerTalk = require('./validateTalkerTalk');
const validateTalkerWatchedAt = require('./validateTalkerWatchedAt');
const validateTalkerRate = require('./validateTalkerRate');

module.exports = {
  handleError,
  validateEmail,
  validatePass,
  token,
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
};