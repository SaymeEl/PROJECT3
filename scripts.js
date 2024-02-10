function sendEmail() {
  // Add your logic here to handle the form submission and sending email
  alert('Email sent successfully!');
  
  // Clear input fields
  document.getElementById('receiverEmail').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
}