const Intern = require('../lib/Intern');

test("Can pull school via constructor", () => {
    const testValue = "UC Berkeley";
    const e = new Intern("John", 0001, "john.doe@gmail.com", testValue);

    expect(e.school).toBe(testValue);
  });
  
  test("expect getRole() to be \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("John", 0001, "john.doe@gmail.com", "UC Berkeley");

    expect(e.getRole()).toBe(testValue);
  });
  
  test("expect getSchool() to pull school", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);

    expect(e.getSchool()).toBe(testValue);
  });