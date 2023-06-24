export const timeout = 150000;
export const Url = 'https://www.moebel-kraft.de/';
export const ProfileUrl = 'https://www.moebel-kraft.de/kundenkonto';
export const logoutUrl = 'https://www.moebel-kraft.de/bestellung/logout';
export const wishUrl ='https://www.moebel-kraft.de/wunschliste';
export const registerUrl ='https://www.moebel-kraft.de/registrierung';
export const registerUrl ='https://www.moebel-kraft.de/warenkorb';
export const InValidPassword = 'wrongpassword';
export const Gender = 'female';
export const TextGenerator = function () {
  var text = '';
  var charset = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < 5; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  return text;
};
export const randamnum = function (length) {
  return Math.floor(Math.random() * length);
};
export const PasswordGenerator = function () {
  const length = 12; // Set the length of the password
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let password = '';

  // Generate at least one of each required character type
  password += lowercaseChars.charAt(
    Math.floor(Math.random() * lowercaseChars.length)
  );
  password += uppercaseChars.charAt(
    Math.floor(Math.random() * uppercaseChars.length)
  );
  password += numberChars.charAt(
    Math.floor(Math.random() * numberChars.length)
  );
  password += specialChars.charAt(
    Math.floor(Math.random() * specialChars.length)
  );

  // Fill up the rest of the password with random characters
  for (let i = 4; i < length; i++) {
    const charType = Math.floor(Math.random() * 4); // 0: lowercase, 1: uppercase, 2: number, 3: special

    switch (charType) {
      case 0:
        password += lowercaseChars.charAt(
          Math.floor(Math.random() * lowercaseChars.length)
        );
        break;
      case 1:
        password += uppercaseChars.charAt(
          Math.floor(Math.random() * uppercaseChars.length)
        );
        break;
      case 2:
        password += numberChars.charAt(
          Math.floor(Math.random() * numberChars.length)
        );
        break;
      case 3:
        password += specialChars.charAt(
          Math.floor(Math.random() * specialChars.length)
        );
        break;
    }
  }
  return password;
};
export const getNumberAfterComma = function (inputString) {
  // replace all non-numeric characters with an empty string
  const numericString = inputString.replace(/[^0-9]/g, '');
  // convert the resulting string to a number and return it
  return Number(numericString);
};


export const convertTextToNumber= function (text) {
  // Remove any commas or periods from the string
  const cleanedText = text.replace(/,/g, "").replace(/\./g, "");
  
  // Remove any trailing dashes and convert to a number
  const number = parseFloat(cleanedText.replace(/-$/, ""));
  
  // If the original text ended with a dash, negate the number
  return text.endsWith("-") ? -number : number;
}