const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const talker = JSON.parse(await readFile('./talker.json', 'utf8'));
    const filteredTalker = talker.filter((t) => Number(t.id) === Number(id));

    const updateTalker = { id: Number(id), name, age, talk };

    filteredTalker.push(updateTalker);

    await writeFile('./talker.json', JSON.stringify(filteredTalker));
    return res.status(200).json(updateTalker);
  } catch (e) {
    return next(e);
  }
};