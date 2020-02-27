'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - name
 *       - email
 *       - password
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 */
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };
  
  User.beforeCreate((user, _) => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);    
  });

  User.prototype.generateAuthToken = (user) => {
    const token = jwt.sign({
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    }, 'secret');
    return token;
  }

  User.prototype.checkPassword = (password, userPassword) => {
    return bcrypt.compareSync(password, userPassword);
  }
  
  return User;
};