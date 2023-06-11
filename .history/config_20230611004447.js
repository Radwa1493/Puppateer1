export const timeout = 120000
export const Url ="https://www.moebel-kraft.de/";
export const ProfileUrl ='https://www.moebel-kraft.de/kundenkonto';
export const logoutUrl ='https://www.moebel-kraft.de/bestellung/logout';
export const InValidPassword ="wrongpassword";
export const Gender ="female";
export const TextGenerator= function(){
        var text = "";
        var charset = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
          text += charset.charAt(Math.floor(Math.random() * charset.length));    
          return text; 
}
export const randamnum = function(length){
  return Math.floor(Math.random() * length);
}   
export const PasswordGenerator = function(){
        const length = 12; // Set the length of the password
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      
        let password = '';
        
        // Generate at least one of each required character type
        password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      
        // Fill up the rest of the password with random characters
        for (let i = 4; i < length; i++) {
          const charType = Math.floor(Math.random() * 4); // 0: lowercase, 1: uppercase, 2: number, 3: special
      
          switch (charType) {
            case 0:
              password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
              break;
            case 1:
              password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
              break;
            case 2:
              password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
              break;
            case 3:
              password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
              break;
          }
        }
        return password;
    }    
    export const PasswordGenerator = function(inputString)
      const match = inputString.match(/,\s*(-?\d+(\.\d+)?)/);
      if (match && match.length > 1) {
        return parseFloat(match[1]);
      } else {
        throw new Error('Number not found after comma.');
      }
    }
    
