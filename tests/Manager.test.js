// Using jest, create manager test
// Create new manager using required parameters

const Manager = require('../lib/Manager');

// Test each parameter
test('constructor values for manager', () => {
  var testValue = '111'
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com','111')
    expect(manager.office).toBe('111');
});

test('returnRole method works?', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com', '111');
    expect(manager.getRole()).toBe('Manager');
});

test('returnOffice method works?', () => {
  var testValue = '111'
  const manager = new Manager('Sophia', '4', 'sopher@gmail.com', '111');
  expect(manager.getOffice()).toBe(testValue);
});