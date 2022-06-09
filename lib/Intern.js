const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        
        // to call on Employee constructor
        super(name, id, email);

        this.schoolName = schoolName;

    }

    getSchool() {
        return this.schoolName;
    }

    // to override the defult employee tag
    getRole() {
        return 'Intern'
    }
};

module.exports = Intern;