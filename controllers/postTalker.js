const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;

    const talker = JSON.parse(await readFile('./talker.json', 'utf8'));
    const newTalker = { name, id: talker.length + 1, age, talk };

    talker.push(newTalker);
    await writeFile('./talker.json', JSON.stringify(talker));
    return res.status(201).json(newTalker);
  } catch (e) {
    return next(e);
  }
};