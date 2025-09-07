// emailjs-api-template.js
// Replace the following with your EmailJS service, template, and user IDs
const EMAILJS_SERVICE_ID = 'web_mail_service';
const EMAILJS_TEMPLATE_ID = 'mail_service';
const EMAILJS_PUBLIC_KEY = '3C1J9HfqpG1LtzGc6';

// This function sends the contact form data using EmailJS
function sendContactEmail(formData) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY);
}

// Example usage:
// sendContactEmail({ name: 'John', email: 'john@example.com', subject: 'Hello', message: 'Test' })
//   .then(response => console.log('SUCCESS!', response))
//   .catch(error => console.error('FAILED...', error));
