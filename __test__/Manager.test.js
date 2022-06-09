const Manager = require('../lib/Manager');

// to check if office number returns
test('to get office number', () => {
    const manager = new Manager('Bman', 1021, 'bman@bman.com', 405)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

// to see if getRole() for manager is working as intended
test('show manager object', () => {
    const manager = new Manager('Bman', 1021, 'bman@bman.com')

    expect(manager.getRole()).toEqual('Manager');
});