const ContactUsController = require('../features/contact-us/contact-us.controller');
const { validateEmailAndPhone } = require('../shared/middleware/validator-middleware');

const registerContactUsRoutes = (app) => {
    app.post('/contactPost', validateEmailAndPhone, ContactUsController.createContactUs)
}

module.exports =  
{   
    registerContactUsRoutes
}