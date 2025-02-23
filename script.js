const passwordInput = document.getElementById("password");
      const lenght = 12;

      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const upperCase = lowerCase.toUpperCase();
      const number = "0123456789";
      const symbol = "@#$%^&*()_+~|}{[]></-=";

      const allChars = upperCase + lowerCase + number + symbol;

      function getRandomChar(str) {
        return str[Math.floor(Math.random() * str.length)];
      }

      function createPassword() {
        let password = "";
        password += getRandomChar(upperCase);
        password += getRandomChar(lowerCase);
        password += getRandomChar(number);
        password += getRandomChar(symbol);

        while (lenght > password.length) {
          password += getRandomChar(allChars);
        }
        passwordInput.value = password;
      }

      function copyPassword() {
        navigator.clipboard.writeText(passwordInput.value);
      }