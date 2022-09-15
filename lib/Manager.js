// Manager takes from Employee class (parent)
const Employee = require('./Employee');


//Extend employee class and call parent constructor using super
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }

}

//Export manager class
module.exports = Manager;