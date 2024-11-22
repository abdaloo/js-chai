class person{
    constructor(firstName,LastName,Dob){
        this.firstName = firstName;
        this.LastName = LastName;
        this.Dob = new Date(Dob) ;
    }

    getBirthYear(){
        return this.Dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.LastName}`;
    }
}

const person1 = new person('Abdal','Hussain','5/3/2003');

console.log(person1.getBirthYear());
console.log(person1);



