// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["a", "b", "c"];
var upperCaseArr = ["A", "B", "C"];
var numbers = ["1", "2", "3"];
var specialChararr = ["!", "@"];
// write function for creating everything needed for password.
function generatePassword() {
   
   
   // write variable for the length of the password. ( 8 to 128)
      var pwLength = prompt("How long would you like the password? Choose between 8 to 128 characters.");
      
      if (pwLength < 8 || pwLength > 128) {
         alert("Please choose a password length between 8 to 128 characters.");
         console.log(pwLength);
         return generatePassword();
      } else if (isNaN(pwLength)) {
         alert("This is not a number");
         console.log(pwLength);
         return generatePassword();
     };

     
//  Prompted for lowercase, uppercase, numeric, and/or special characters
  

// Confirm whether or not to include lowercase
     var lowerCase = confirm("Would you like to include lowercase letters?");
     if (lowerCase) {
        alert("Your password will have lowercase letters.");
     } else {
        alert("Your password will not have lowercase letters.");
     };


// Confirm whether or not to include uppercase
     var upperCase = confirm("Would you like to include uppercase letters?");
     if (upperCase) {
        alert("Your password will have uppercase letters.");
     } else {
        alert("Your password will not have lowercase letters.");
     };
// Confirm whether or not to include numeric
     var numeric = confirm("Would you like to include numbers?");
     if (numeric) {
      alert("Your password will include numbers.");
     } else {
      alert("Your password will not include numbers.");
     };
// Confirm whether or not to include special characters
var specialChar = confirm("Would you like to include numbers?");
     if (specialChar) {
      alert("Your password will include special characters.");
     } else {
      alert("Your password will not include special characters.");
     };

   //   If selected none then have to select one
if (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
    alert("Please select at least one character type.");
}


     var finalPassword = "Generated Password";
     var possibleChars = [];

     //  When answered the input should be validated and at least one character type should be selected
     if (lowerCase){
      possibleChars.concat(lowerCaseArr);
     }
     if (upperCase){
      possibleChars.concat(upperCaseArr);
     }
     if (numeric) {
      possibleChars.concat(numbers);
     }
     if (specialChar) {
      possibleChars.concat(specialChararr);
     }
   //   for loop. 
     function createPassword () {
      for(i=0; i < pwLength; i++){
         finalPassword = finalPassword + randomizerd(possibleChars)
      }

     };

     function randomize(arr) {
      // randomize array
      return arr[Math.floor(Math.random() * arr.length)];
     }
     return finalPassword;


};




//  when all promps answered the password generated

//  password either displayed in alert or written on the page.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
