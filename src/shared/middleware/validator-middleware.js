const validator = require('validator')

const validateEmailAndPhone = (req, res, next) => {
    const { email, phone } = req.body;
    const errors = [];
    if (!validator.isEmail(email)) {
      errors.push('Invalid email');
    }
    if (!validator.isMobilePhone(phone)) {
      errors.push('Invalid phone number');
    }
    if (errors.length > 0) {
      return res.status(400).json({ message: errors.join(', ') });
    }
    next();
  };

  module.exports = {
    validateEmailAndPhone
  }
