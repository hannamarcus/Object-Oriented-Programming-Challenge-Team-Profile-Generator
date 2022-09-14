// Intern takes from Employee class (parent)
const intern = require('./Intern');
const Intern = require('./Employee');


/*Extend employee class and call parent constructor using super
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
*/

class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    returnSchool() {
        return this.school;
    }

    returnRole() {
        return "Intern";
    }

}


//Export intern class
module.exports = Intern;