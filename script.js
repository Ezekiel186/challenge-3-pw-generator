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
function random(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
  // password = letters=[Math.floor(Math.random() * 26)]
    // return password
    // // passwordLength = letters * passwordLength
    //  return password
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
  var includeSplChar = confirm("Do you want special Characters in the password?")
  // passwordCharacters = confirm("Special Characters in the password?") {
  // if (confirm("Special Characters in the password?") == true)
  //   password + 7;
  // } else {
  //   text = "No Special Characters";
  // }
  // console.log(password)
  //}
  var password = '';

  password += random(letters);

  if (includeNum) {
    password += random(numbers)
  }

  if (includeSplChar) {
    password += random(specialChars)
  }

  var remaininglength = passwordLength - password.length;

  for (var i = 0; i < remaininglength; i++) {
    var characters = random([letters]);

    if (includeNum && includeSplChar) {
      characters = random([letters, numbers, specialChars]);
    } else if (includeNum) {
      characters = random([letters, numbers])
    } else if (includeSplChar) {
      characters = random([letters, specialChars])
    }

    password += random(characters);
  }

  password = password.split('');
  for (var i = password.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);