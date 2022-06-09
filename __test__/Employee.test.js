
const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Aman', 1023, 'aman@aman.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// to get employee name
test('gets employee name', () => {
    const employee = new Employee('Aman', 1023, 'aman@aman.com')

    expect(employee.getName()).toEqual(expect.any(String));
});

// to get employee id
test('gets employee id', () => {
    const employee = new Employee('Aman', 1023, 'aman@aman.com')

    expect(employee.getId()).toEqual(expect.any(Number));
});

// to get employee email
test('gets employee name', () => {
    const employee = new Employee('Aman', 1023, 'aman@aman.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// to get employee role
test('gets employee role', () => {
    const employee = new Employee('Aman', 1023, 'aman@aman.com')

    expect(employee.getRole()).toEqual('Employee');
});