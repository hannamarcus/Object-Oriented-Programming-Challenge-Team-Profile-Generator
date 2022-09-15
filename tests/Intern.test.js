// Using jest, create intern test
// Create new Intern using required parameters
const Intern = require('../lib/Intern');

// Test each parameter
test('constructor values for intern', () => {
    var testValue = 'UC Berkeley'
    const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'UC Berkeley');
    expect(intern.school).toBe(testValue);
});

test('returnRole method works?', () => {
    const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'UC Berkeley');
    expect(intern.returnRole()).toBe('Intern');
});

test('returnSchool method works?', () => {
  var testValue = 'UC Berkeley'
  const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'UC Berkeley');
  expect(intern.returnSchool()).toBe(testValue);
});