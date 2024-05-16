const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&@%$*/°_§€";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowerCase);

  if (uppercase.checked) data.push(...dataUpperCase);

  if (numbers.checked) data.push(...dataNumbers);

  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  passwordOutput.select();
  navigator.clipboard
    .writeText(password)
    .then(() => {
      generateButton.textContent = "Copié!";
    })
    .catch((err) => {
      alert("Erreur lors de la copie du mot de passe :", err);
    });
  setTimeout(() => {
    generateButton.textContent = "Génerer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
