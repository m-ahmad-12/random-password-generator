function generatePassword() {

  let passwordLength =
    document.getElementById("length").value;

  let includeNumbers =
    document.getElementById("numbers").checked;

  let includeSymbols =
    document.getElementById("symbols").checked;

  let allCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let numberCharacters = "0123456789";

  let symbolCharacters = "!@#$%^&*()_+";

  if (includeNumbers) {
    allCharacters =
      allCharacters + numberCharacters;
  }

  if (includeSymbols) {
    allCharacters =
      allCharacters + symbolCharacters;
  }

  let finalPassword = "";

  for (let i = 0; i < passwordLength; i++) {

    let randomPosition =
      Math.floor(Math.random() * allCharacters.length);

    finalPassword =
      finalPassword + allCharacters[randomPosition];
  }

  document.getElementById("password").value =
    finalPassword;
}