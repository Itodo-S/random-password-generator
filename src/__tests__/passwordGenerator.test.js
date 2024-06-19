const generateRandomPassword = require('../passwordGenerator');

describe('generateRandomPassword', () => {
  test('generates a password of the specified length', () => {
    const password = generateRandomPassword(10, true, true, true, true);
    expect(password.length).toBe(10);
  });

  test('generates a password with uppercase letters', () => {
    const password = generateRandomPassword(10, true, false, false, false);
    expect(password).toMatch(/[A-Z]/);
  });

  test('generates a password with lowercase letters', () => {
    const password = generateRandomPassword(10, false, true, false, false);
    expect(password).toMatch(/[a-z]/);
  });

  test('generates a password with numbers', () => {
    const password = generateRandomPassword(10, false, false, true, false);
    expect(password).toMatch(/[0-9]/);
  });

  test('generates a password with special characters', () => {
    const password = generateRandomPassword(10, false, false, false, true);
    expect(password).toMatch(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/);
  });

  test('throws an error if no character types are selected', () => {
    expect(() => {
      generateRandomPassword(10, false, false, false, false);
    }).toThrow('At least one character type must be selected');
  });
});
