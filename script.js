// Assignment Code
var generateBtn = document.querySelector("#generate");

// write function for creating everything needed for password.
function generatePassword() {
    // write variable for the length of the password. ( 8 to 128)
    var length = prompt("How long would you like the password? Choose between 8 to 128 characters.");
    if (length < 8 || length > 128) {
        return "Please choose a password length between 8 to 128 characters.";
        // may or may not need === true/false. Not sure ask about it.
     } else if ( isNan(length)) {
        return "This is not a number";
    } else {
        alert("Your password will be " + length + " characters long.");
    };

// Confirm whether or not to include lowercase
     var lowerCase = confirm("Would you like to include lowercase letters?");
     if (lowerCase) {
        alert("Your password will have lowercase letters.")
     } else {
        alert("Your password will not have lowercase letters.")
     }


// Confirm whether or not to include uppercase

// Confirm whether or not to include numeric

// Confirm whether or not to include special characters



}
//  Promted for lowercase, uppercase, numeric, and/or special characters
//  When answered the input should be validated and at least one character type should be selected
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
