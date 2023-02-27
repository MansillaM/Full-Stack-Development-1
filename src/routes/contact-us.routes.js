const ContactUsController = require('../features/contact-us/contact-us.controller');

const registerContactUsRoutes = (app) => {
    app.post('/contactPost', ContactUsController.createContactUs)
}

module.exports =  
{   
    registerContactUsRoutes
}