/* eslint-disable no-console */
const express = require('express');
const passport = require('passport');
const login = require('./login');
const register = require('./register');

const router = express.Router();

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    });
  },
);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
