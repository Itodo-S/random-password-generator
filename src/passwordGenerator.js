const generateRandomPassword = (
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSpecialChars
  ) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let charPool = '';
    if (useUppercase) charPool += uppercaseChars;
    if (useLowercase) charPool += lowercaseChars;
    if (useNumbers) charPool += numberChars;
    if (useSpecialChars) charPool += specialChars;
  
    if (!charPool) {
      throw new Error('At least one character type must be selected');
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
  
    return password;
  };
  
  module.exports = generateRandomPassword;
  