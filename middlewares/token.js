const crypto = require('crypto');

const createToken = () => crypto.randomBytes(8).toString('hex');

module.exports = (_req, res) => res.status(200).json({
    token: createToken(),
  });