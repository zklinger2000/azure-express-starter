"use strict";
const User = require('../models/User');

const usersController = {

  create: (req, res) => {
    const user = req.body;

    // See if User already exists
    User.findOne({ 'username': user.username })
    // Find or Create
      .then(foundUser => {
        // If one does
        if (foundUser) {
          return res.status(409).send('User already exists');
        }
        // Else
        else {
          // Save new User
          const newUser = new User({
            username: user.username,
            password: user.password
          });
          return newUser.save(err => {
            if (!err) res.status(200).send(newUser);
          });
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};

export default usersController;
