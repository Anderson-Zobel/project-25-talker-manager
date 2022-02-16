const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talker = JSON.parse(await readFile('./talker.json', 'utf8'));

    const getTalker = talker.find((t) => t.id === Number(id));

    if (!getTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 

    return res.status(200).json(getTalker);
  } catch (e) {
    return next(e);
  }
};