/*type Gender = 'M' | 'F'
class Person {
    
    public name: string
    public gender: Gender
    public birthdate: Date
    
    constructor(name: string, gender: Gender, birthdate: Date) {
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate
    }

}

class User extends Person {
    public lastAccess: Date
    constructor(
        public email: string, 
        public role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    ){
        super(name, gender, birthdate)
        this.lastAccess = new Date()
    }
}

class UserSettings extends User {
    constructor(
            public woringDirectory : string,
            public lastOpenFolder : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
        super(email, role, name, gender, birthdate);
    }
}
*/
//const userSettings = new UserSettings('/usr/home', '/home', 'angel.goez','ADMIN', 'Angel Manuel', 'M', new Date('1995-02-26'))
//const newPeroson = new Person('Angel Manuel', "M", new Date('1995-02-26'))
//const newUser = new User('angel.goez', 'ROLE', 'Angel Manuel Góez Giraldo', 'M', new Date('1995-02-26'));