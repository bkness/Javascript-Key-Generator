// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
// Creating arrays to choose from after prompts are selected

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArr = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

lowercaseString = lowercaseArr.join



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// THEN I am presented with a series of prompts for password criteria

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Creating function to start the generate process. creates a variable for the password generated 
// and character types so we can loop our array into one function

function generatePassword() {
    var password = "";
    var charTypes = [];
 
    // charTypes = {
    //     lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    //     upper: ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //     num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    //     spec: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
//}
    
    // Creating a constant variable so we can make a prompt and create our if statement
    // Now the user sees instructions on how to continue

    const passwordLength = prompt("How long would you like your password? Use numbers to choose from 8 - 128");

   
    // Now we start the if statement so our ending password legnth cant be less than 8 or greater than 128

    if (passwordLength < 8 || passwordLength > 128) {
        // if password legnth doesnt meet requirements they get an alert
        alert('Please choose the correct length for your password');
        return;
    }

    //   WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt

    // Created variables for us to use defining whther the user wants lowercase, uppercase, numeric, or
    // special keys. Added messages to be selected when selecting yes or no

    var lowercase = confirm("Do you want lowercase?");
    var uppercase = confirm("Do you want uppercase");
    var numeric = confirm("Do you want numeric");
    var specChar = confirm("Do you want special characters?");


    // THEN my input should be validated and at least one character type should be selected

    //   Added an if statement so we can store the users choice as a boolean 
    //   and select the appropriate array for the loop

    if (lowercase === false && uppercase === false && numeric === false && specChar === false) {
        // Creates an alert if all four variable return false
        alert('One type must be chosen!');
        return "";
    } 

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

    // Created a variable we can store all of the users prompts in for our for loop
        var keys = [];

    // I concatented every line accordingly to the users selection to get it ready for generation
    if (lowercase) {
        keys = keys.concat(lowercaseArr);
    }

    if (uppercase) {
        keys = keys.concat(uppercaseArr);
    }

    if (numeric) {
        keys = keys.concat(numericArr);
    }

    if (specChar) {
        keys = keys.concat(specialArr);
    }

    // here we created our loop using the var which now contains the selected values
    // index would be out if statements based off our key arrays.
    // the index will climb up with i++ and down with i--
    for (var i = 0; i < passwordLength; i++) {
        // using the math floor and math random plus our array length we can randomize a selection    
        var randomIndex = Math.floor(Math.random() * keys.length);
        // using an operator += to specify that the password will be our math floor and math random result
        password += keys[randomIndex];
    }

    // returns our resulted password selection
    return password;
}






