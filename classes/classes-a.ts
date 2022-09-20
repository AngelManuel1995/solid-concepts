type Gender = 'M' | 'F'
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

const newPeroson = new Person('Hola', "F", new Date())