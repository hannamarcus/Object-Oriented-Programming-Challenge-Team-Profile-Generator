// Using jest, create engineer test
// Create new Engineer using required parameters

const Engineer = require('../lib/Engineer');

// Test each parameter
test('constructor values for engineer', () => {
  var testValue = 'githubUsername'
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
  expect(engineer.github).toBe('githubUsername');
});

test('returnRole method works?', () => {
    const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
    expect(engineer.getRole()).toBe('Engineer');
});

test('returnGithub method works?', () => {
  var testValue = 'githubUsername'
  const engineer = new Engineer('Sam', '2', 'samtheman@gmail.com', 'githubUsername');
  expect(engineer.getGithub()).toBe(testValue);
});
