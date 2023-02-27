/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();

// const validator = require('validator')


async function createUsPost() {
	let fullname = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let company_name = document.getElementById('company_name').value;
	let project_name = document.getElementById('project_name').value;
	let project_desc = document.getElementById('project_description').value;
	let departement = document.getElementById('departement').value;
	let message = document.getElementById('message').value;
	let file = document.getElementById('file').value;

	const data = {
	  "fullname": fullname,
	  "email": email,
	  "phone": phone,
	  "company_name": company_name,
	  "project_name": project_name,
	  "project_desc": project_desc,
	  "departement": departement,
	  "message": message,
	  "file": file
	};
  
	const response = await fetch('http://localhost:3000/contactPost', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	});
  
	console.log(data)
	const result = await response.json();
	console.log(result);
  }

let form = document.getElementById('contact-form');

form.addEventListener('submit', createUsPost);