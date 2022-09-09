const employee = require('./Employee');

//Create class for employee and using a constructor call name id and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;       
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
    
//return employee class 
    returnRole(){
        return "Employee";
    }
}

// export employee information 
module.exports = Employee;