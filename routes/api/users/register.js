/* eslint-disable consistent-return */
/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');
const keys = require('../../../config/keys');
const { validateRegisterInput } = require('../validation/user');

const register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ handle: req.body.handle }).then((user) => {
    if (user) {
      errors.handle = 'User already exists';
      return res.status(400).json(errors);
    }
    const newUser = new User({
      handle: req.body.handle,
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((u) => {
            const payload = { id: u.id, handle: u.handle };

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (e, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              },
            );
          })
          .catch((e) => console.log(e));
      });
    });
  });
};

module.exports = register;
