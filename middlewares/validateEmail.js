module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!email) {
          return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
   
    if (!email.match(validEmail)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    return next();
  } catch (e) {
    return next(e);
  }
};
