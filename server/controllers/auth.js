const UserModal = require('../modal/userModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewUser = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 6);
    const newUser = new UserModal({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(401).json(error);
  }
};

const loginUser = async (req, res) => {
  const user = await UserModal.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(400).json({ message: 'user does not exist' });
    return;
  }
  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
  console.log(isValidPassword);
  console.log(req.body.password);
  console.log(user.password);
  if (!isValidPassword) {
    res.status(402).json({ message: 'password does not match' });
    return;
  }
  const token = jwt.sign(
    {
      fullName: user.fullName,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
  res.status(201).json({ message: 'user Signed In', token });
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModal.find();
    res.status(201).json(allUsers);
  } catch (error) {
    res.status(401).json(error);
  }
};
module.exports = { addNewUser, loginUser, getAllUsers };
