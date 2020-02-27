const { check, validationResult } = require("express-validator")

module.exports = {
  validateRegister : [
    check("name").notEmpty(),
    check("email").isEmail(),
    check('password').isLength({ min: 5 }),
    (req, res, next) => {
      const error = validationResult(req);
      if(!error.isEmpty()){
        return res.status(422).send({error: error.array()})
      }
      next();
    }
  ]
}