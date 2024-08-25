// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get all input fields
  const inputs = form.querySelectorAll('input, select');

  // Initialize an empty error message array
  let errors = [];

  // Loop through each input field
  inputs.forEach((input) => {
    // Check if input field is empty
    if (input.value.trim() === '') {
      // Add error message to array
      errors.push(`Please fill in ${input.name}`);
    }

    // Check if input field is an email
    if (input.type === 'email') {
      // Check if input field contains a valid email address
      if (!validateEmail(input.value)) {
        // Add error message to array
        errors.push(`Please enter a valid email address for ${input.name}`);
      }
    }

    // Check if input field is a date
    if (input.type === 'date') {
      // Check if input field contains a valid date
      if (!validateDate(input.value)) {
        // Add error message to array
        errors.push(`Please enter a valid date for ${input.name}`);
      }
    }
  });

  // Check if there are any error messages
  if (errors.length > 0) {
    // Display error messages
    alert(errors.join('\n'));
  } else {
    // Submit the form
    form.submit();
  }
});

// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to validate date
function validateDate(date) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
}