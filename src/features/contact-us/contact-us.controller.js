const Contact = require('../../shared/db/mongodb/schemas/contact-us.Schema');
const asyncWrapper = require('../../shared/util/base-utils')

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