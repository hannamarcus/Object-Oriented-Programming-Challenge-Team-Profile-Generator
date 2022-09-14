// Using jest, create employee test
// Create new employee using required parameters

const Employee = require('../lib/Employee');
const employee = new Employee('Hanna', '1', 'hannamarcus1@gmail.com', 'Employee');

// Test each parameter
test('constructor values for Employee', () => {
    expect(employee.name).toBe('Hanna');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('hannamarcus1@gmail.com');
});

test('returnName method works?', () => {
    const employee = new Employee('Hanna', '1', 'hannamarcus1@gmail.com', 'Employee');
    expect(employee.returnName()).toBe('Hanna');
});

test('returnID method works?', () => {
    const employee = new Employee('Hanna', '1', 'hannamarcus1@gmail.com', 'Employee');
    expect(employee.returnId()).toBe('1');
});

test('returnEmail method works?', () => {
    const employee = new Employee('Hanna', '1', 'hannamarcus1@gmail.com', 'Employee');
    expect(employee.returnEmail()).toBe('hannamarcus1@gmail.com');
});

test('returnRole method works?', () => {
    const employee = new Employee('Hanna', '1', 'hannamarcus1@gmail.com', 'Employee');
    expect(employee.returnRole()).toBe('Employee');
});