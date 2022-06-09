class Employee {
    // array of atrributes each employee needs
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // methods to get neccessary information

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;