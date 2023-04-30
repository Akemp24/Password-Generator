// Assignment Code
var generateBtn = document.querySelector("#generate");

// write function for creating everything needed for password.
function generatePassword() {
    // write variable for the length of the password. ( 8 to 128)
    var length = prompt("How long would you like the password? Choose between 8 to 128 characters.")
    if (length < 8 || length > 128) {
        console.log("Please choose a password length between 8 to 128 characters.")
    } else if ( NaN(length) ) {
        console.log ("Please enter a valid number.")
    } else {
        alert("Your password will be " + length + " characters long.")
    };

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
