// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
// var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// var numbers = ["0","1","2","3","4","5","6","7","8","9"]
// var password = 0
// Write password to the #password input
function randomLetter() {
  var randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
  // password = letters=[Math.floor(Math.random() * 26)]
  // return password
  // // passwordLength = letters * passwordLength
  //  return password
}

function randomNum() {
  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

function randomSpecialChar() {
  var randomIndex = Math.floor(Math.random() * specialChars.length);
  return specialChars[randomIndex];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword() {
  var passwordLength = prompt("How many characters long do you want your password to be?")
  //   password = prompt("How many characters long?")  

  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("Password must be at most 128 characters");
    return;
  } //else (passwordLength = NaN) {
  //   return;
  // }
  var includeNum = confirm("Do you want numbers in the password?");
  // numbers = confirm("Numbers in the password?")
  var includeSplChar = confirm("Do you want special characters in the password?")
  // passwordCharacters = confirm("Special Characters in the password?") {
  // if (confirm("Special Characters in the password?") == true)
  //   password + 7;
  // } else {
  //   text = "No Special Characters";
  // }
  // console.log(password)
  //}
  var password = '';

  password += randomLetter(letters);

  if (includeNum) {
    password += randomNum(numbers)
  }

  if (includeSplChar) {
    password += randomSpecialChar(specialChars)
  }

  var lengthLeft = passwordLength - password.length;

  for (var i = 0; i < lengthLeft; i++) {
    var characters = randomLetter([letters]);

    if (includeNum && includeSplChar) {
      characters = randomLetter([letters]), randomNum([numbers]), randomSpecialChar([specialChars]);
    } else if (includeNum) {
      characters = randomLetter([letters]), randomNum([numbers]);
    } else if (includeSplChar) {
      characters = randomLetter([letters]), randomSpecialChar([specialChars]);
    }

    password += (characters);
  }

  password = password.split('');

  return password.join('');
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);