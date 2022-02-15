const { readFile } = require('fs/promises');

module.exports = async (_req, res, next) => {
  try {
    const talker = await JSON.parse(readFile('./talker.json', 'utf8'));
    
    return res.status(200).json(talker);
  } catch (e) {
    return next(e);
  }
};