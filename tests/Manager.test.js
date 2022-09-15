// Using jest, create manager test
// Create new manager using required parameters

const Manager = require('../lib/Manager');

// Test each parameter
test('constructor values for manager', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com','111')
    expect(manager.office).toBe('111');
});

test('returnRole method works?', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com', '111');
    expect(manager.returnRole()).toBe('Manager');
});

test('returnOffice method works?', () => {
  const manager = new Manager('Sophia', '4', 'sopher@gmail.com', '111');
  expect(manager.returnOffice()).toBe('111');
});