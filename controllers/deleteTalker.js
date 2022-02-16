const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talker = JSON.parse(await readFile('./talker.json', 'utf8'));

    const deleted = talker.filter((t) => Number(t.id) !== Number(id));

    await writeFile('./talker.json', JSON.stringify(deleted));
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
};