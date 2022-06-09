const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        
        // to call on Employee constructor
        super(name, id, email);

        this.gitHubUserName = gitHubUserName;

    }

    getGithub() {
        return this.gitHubUserName;
    }

    // to override the defult employee tag
    getRole() {
        return 'Engineer'
    }
};

module.exports = Engineer;