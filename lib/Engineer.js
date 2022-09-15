// Engineer takes from Employee class (parent)
const Employee = require('./Employee');



//Extend employee class and call parent constructor using super
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

//Export engineer information
module.exports = Engineer;