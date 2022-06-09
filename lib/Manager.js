const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

    // to call on Employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;

    }

    // to override the defult Employee tag
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;