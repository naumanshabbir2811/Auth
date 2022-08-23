const checkValidate = async (req, res, next) => {
  if (!req.body.fullName) {
    res.status(400).json({ message: 'fullName is Required' });
  }
  if (!req.body.email) {
    res.status(400).json({ message: 'email is Required' });
  }
  if (!req.body.password) {
    res.status(400).json({ message: 'password is Required' });
  }
  next();
};
module.exports = { checkValidate };
