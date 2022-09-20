/*type Gender = 'M' | 'F'

interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
}

class Person {
    public name: string
    public gender: Gender
    public birthdate: Date

    constructor({name, gender, birthdate}:PersonProps) {
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
}

interface UserProps {
    email: string;
    role: string;
    name: string,
    gender: Gender;
    birthdate: Date;
}

class User extends Person {
    protected lastAccese: Date
    public email: string;
    public role: string;
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ email, role, name, birthdate, gender }: UserProps){
        super({name, gender, birthdate});
        this.lastAccese = new Date()
        this.email = email;
        this.role = role;
    }
}

interface UserSettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role:  string;
    name:  string;
    gender: Gender;
    birthdate: Date;
}

class UserSetting extends User {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor({workingDirectory, lastOpenFolder, email, birthdate, gender, name, role}:UserSettingProps){
        super({birthdate,email,gender,name,role});
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder
    }
}*/