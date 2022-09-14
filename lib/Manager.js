// Manager takes from Employee class (parent)
const manager = require('./Manager');
const Manager = require('./Employee');


/*Extend employee class and call parent constructor using super
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    */

class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = this.office;
    }

    returnName() {
        return this.name;
    }

    returnId() {
        return this.id;
    }

    returnEmail() {
        return this.email;
    }

    returnRole() {
        return "Manager";
    }

    returnOffice() {
        return this.office;
    }

}

//Export manager class
module.exports = Manager;