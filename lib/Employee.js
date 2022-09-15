//Create class for employee and using a constructor call name id and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;       
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    
//Return employee class 
    getRole(){
        return "Employee";
    }
}

// Export employee information 
module.exports = Employee;