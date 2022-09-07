const Manager = require("../lib/Manager");

test("Can pull office number via constructor", () => {
  const testValue = 222;
  const e = new Manager("John", 0001, "john.doe@gmail.com", testValue);

  expect(e.officeNumber).toBe(testValue);
});

test("does getRole() work?", () => {
  const testValue = "Manager";
  const e = new Manager("John", 0001, "john.doe@gmail.com", 222);

  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 222;
  const e = new Manager("Foo", 1, "test@test.com", testValue);

  expect(e.getOfficeNumber()).toBe(testValue);
});