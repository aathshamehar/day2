function setAndVerifyPassword(event) {
    event.preventDefault(); 
  
  
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
   
    if (password === '') {
      showResult('Password is required.');
      return;
    }
  
    if (confirmPassword === '') {
      showResult('Please confirm your password.');
      return;
    }
  
   
    if (password !== confirmPassword) {
      showResult('Passwords do not match.');
      return;
    }
  

   
  
 
    showResult('Password set and verified successfully.');
  }
  
  function showResult(message) {
    var resultElement = document.getElementById('result');
    resultElement.innerText = message;
  
    if (message !== 'Password set and verified successfully.') {
      alert(message);
    }
  }
  