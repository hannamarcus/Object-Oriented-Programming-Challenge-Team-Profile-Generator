// Intern takes from Employee class (parent)
const Employee = require('./Employee');



//Extend employee class and call parent constructor using super
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

        getRole() {
        return "Intern";
    }


    getSchool() {
        return this.school;
    }

}


//Export intern class
module.exports = Intern;