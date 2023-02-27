const Contact = require('../../shared/db/mongodb/schemas/contact-us.Schema');
const asyncWrapper = require('../../shared/util/base-utils')
const validator = require('validator')

const createContactUs = asyncWrapper(async (req, res) => {
    const {
      fullname,
      email,
      phone,
      company_name,
      project_name,
      project_desc,
      departement,
      message,
      file
    } = req.body;

      // Validate email and phone
    if (!validator.isEmail(email)) {
        return res.status(400).json({ msg: 'Invalid email' });
    }
    if (!validator.isMobilePhone(phone)) {
        return res.status(400).json({ msg: 'Invalid phone number' });
    }
  
    const contactUs = await Contact.create({
      fullname,
      email,
      phone,
      company_name,
      project_name,
      project_desc,
      departement,
      message,
      file
    });
  
    res.status(201).json({ msg: 'Contact Us created', data: contactUs });
  });

  module.exports = 
  {
    createContactUs
  }