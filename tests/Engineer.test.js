// Using jest, create engineer test
// Create new Engineer using required parameters

const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');

// Test each parameter
test('constructor values for engineer', () => {
    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('samtheman@gmail.com');
    expect(engineer.github).toBe('githubUsername');
});

test('returnName method works?', () => {
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'Engineer', 'githubUsername');
  expect(engineer.returnName()).toBe('Sam');
});

test('returnID method works?', () => {
    const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'Engineer', 'githubUsername');
    expect(engineer.returnId()).toBe(2);
});

test('returnEmail method works?', () => {
    const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'Engineer', 'githubUsername');
    expect(engineer.returnEmail()).toBe('samtheman@gmail.com');
});

test('returnRole method works?', () => {
    const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'Engineer', 'githubUsername');
    expect(engineer.returnRole()).toBe('Engineer');
});

test('returnGithub method works?', () => {
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'Engineer', 'githubUsername');
  expect(engineer.returnGithub()).toBe('githubUsername');
});
