// Using jest, create engineer test
// Create new Engineer using required parameters

const Engineer = require('../lib/Engineer');

// Test each parameter
test('constructor values for engineer', () => {
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
  expect(engineer.github).toBe('githubUsername');
});

test('returnRole method works?', () => {
    const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
    expect(engineer.returnRole()).toBe('Engineer');
});

test('returnGithub method works?', () => {
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
  expect(engineer.returnGithub()).toBe('githubUsername');
});
