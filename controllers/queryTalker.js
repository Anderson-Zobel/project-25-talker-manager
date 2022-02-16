const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;

    const talker = JSON.parse(await readFile('./talker.json', 'utf8'));

    const search = talker.filter((t) => t.name.includes(q));

    return res.status(200).json(search);
  } catch (e) {
    return next(e);
  }
};