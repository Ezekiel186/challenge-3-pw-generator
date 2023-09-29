# week-3-challenge-pw-generator

## Description

This was the third homework assignmment or "challenge" from my bootcamp. In this assignment we were told to make a random password generator using javascript that asked if the user wanted to include numbers and symbols to be included in the generated password. However due to personal matters I was not able to work on this homework assignment to my full extent. To make up for my lack of time I used chat gpt as a starting off point and reference for my work. I used the lines:   

for (var i = 0; i < remainingLength; i++) {
    var characterSet = getRandomCharacter([uppercaseChars, lowercaseChars]);

if (includeNumbers && includeSpecialChars) {
      characterSet = getRandomCharacter([uppercaseChars, lowercaseChars, numberChars, specialChars]);
    } else if (includeNumbers) {
      characterSet = getRandomCharacter([uppercaseChars, lowercaseChars, numberChars]);
    } else if (includeSpecialChars) {
      characterSet = getRandomCharacter([uppercaseChars, lowercaseChars, specialChars]);
    }

    password += getRandomCharacter(characterSet);
  }

  // Shuffle the password to make it more random
  password = password.split('');
  for (var i = password.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  And:

  function random(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
  }

 From chatgpt to start my own lines of code that ended up looking like:

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

  And:

  function randomLetter() {
  var randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

function randomNum() {
  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

function randomSpecialChar() {
  var randomIndex = Math.floor(Math.random() * specialChars.length);
  return specialChars[randomIndex];
}

From what I have researched changing this much should avoid plagiarism. However if I am mistaken please correct me. This has been the toughest challenge I have done so far because of the lack of time I had working on it. Like the other challenges I have done, I left out my experimental code and commented them out.

## Usage

This website can be used for generating random passwords. First you have to click the red button that says Generate Password. It will then ask how many characters-long you want your password to be. You must put atleast 8 or atmost 128. It then asks you if you want numbers mixed in your randomly generated password. If you want numbers click Ok and it will mix in numbers in your password. If you don't want numbers press cancel. it will then ask you if you want to add special characters in your password. If you want special characters click ok, if not click cancel. After three pop ups a password will generate.

## Credits

I am not confortable crediting myself until after the graders have confirmed that the lines of code I used as a starting off point isn't plagiarism.