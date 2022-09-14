// Using jest, create manager test
// Create new manager using required parameters

const Manager = require('../lib/Manager');
const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111')

// Test each parameter
test('constructor values for manager', () => {
    expect(manager.name).toBe('Sophia');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('sopher@gmail.com');
    expect(manager.office).toBe('111');
});

test('returnName method works?', () => {
  const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111');
  expect(manager.returnName()).toBe('Sophia');
});

test('returnID method works?', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111');
    expect(manager.returnId()).toBe('4');
});

test('returnEmail method works?', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111');
    expect(manager.returnEmail()).toBe('sopher@gmail.com');
});

test('returnRole method works?', () => {
    const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111');
    expect(manager.returnRole()).toBe('Manager');
});

test('returnOffice method works?', () => {
  const manager = new Manager('Sophia', '4', 'sopher@gmail.com', 'Manager', '111');
  expect(manager.returnOffice()).toBe('111');
});