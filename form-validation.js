const submitBtn = document.querySelector('.f-button');

// Function to check if email is valid

const validEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};
// Checking validation after button is pressed

submitBtn.addEventListener('click', (event) => {
  const validatedEmail = document.getElementById('email').value;
  if (!validEmail(validatedEmail)) {
    document.querySelector('.lable').innerHTML = 'Please type the email in lowercase';
    event.preventDefault();
  } else {
    document.querySelector('.lable').innerHTML = '';
  }
});