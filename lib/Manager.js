// Manager takes from Employee class (parent)
const manager = require('./Employee');
const employee = require('./Employee');


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
    
        returnName(){
            return this.name;
        }
    
        returnId(){
            return this.id;
        }
    
        returnEmail(){
            return this.email;
        }

    // Add Office parameter 
    returnOffice() {
        return this.office;
    }

    returnRole() {
        return "Manager";
    }

}

//Export manager class
module.exports = Manager;