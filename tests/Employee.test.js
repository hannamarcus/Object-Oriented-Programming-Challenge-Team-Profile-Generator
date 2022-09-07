const Employee = require('../lib/Employee');

test('Employee info created?', () => {
    const e = new Employee('John', 0001, 'john.doe@gmail.com');

    expect(e.name).toBe('John');
    expect(e.id).toBe(0001);
    expect(e.email).toBe('john.doe@gmail.com');
});

test('getId works?', () => {
    const employee = new Employee('John', 0001, 'john.doe@gmail.com');

    expect(e.getId()).toBe(0001);
});

test('getName works?', () => {
    const e = new Employee('John', 2683, 'john.doe@gmail.com');

    expect(e.getName()).toBe('John');
});

test('getEmail works?', () => {
    const e = new Employee('John', 0001, 'john.doe@gmail.com');

    expect(e.getEmail()).toBe('john.doe@gmail.com');
});

test('getRole works?', () => {
    const e = new Employee('John', 001, 'john.doe@gmail.com');

    expect(e.getRole()).toBe('Employee');
});