// Using jest, create intern test
// Create new Intern using required parameters
const Intern = require('../lib/Intern');
const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');

// Test each parameter
test('constructor values for intern', () => {
    expect(intern.name).toBe('Zach');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('zachattack@gmail.com');
    expect(intern.office).toBe('Berkeley');
    expect(intern.school).toBe('UC Berkeley');
});

test('returnName method works?', () => {
  const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
  expect(intern.returnName()).toBe('Zach');
});


test('returnID method works?', () => {
    const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
    expect(intern.returnId()).toBe('3');
});

test('returnEmail method works?', () => {
    const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
    expect(intern.returnEmail()).toBe('zachattack@gmail.com');
});

test('returnRole method works?', () => {
    const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
    expect(intern.returnRole()).toBe('Intern');
});

test('returnOffice method works?', () => {
  const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
  expect(intern.returnOffice()).toBe('Berkeley');
});

test('returnSchool method works?', () => {
  const intern = new Intern('Zach', '3', 'zachattack@gmail.com', 'Intern', 'Berkeley', 'UC Berkeley');
  expect(intern.returnSchool()).toBe('UC Berkeley');
});