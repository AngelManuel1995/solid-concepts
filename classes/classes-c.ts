type Gender = 'M' | 'F'

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
}

class User {
    protected lastAccese: Date
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps){
        this.lastAccese = new Date()
        this.email = email;
        this.role = role;
    }
}

interface SettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
}

class Settings {
    public workingDirectory: string
    public lastOpenFolder: string
    constructor({workingDirectory, lastOpenFolder }:SettingProps){
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder
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

class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({birthdate,email, gender, lastOpenFolder, name, role, workingDirectory}:UserSettingProps){
        this.person = new Person({birthdate,gender,name});
        this.settings = new Settings({lastOpenFolder, workingDirectory});
        this.user = new User({email,role});
    }
}

const newUserSettings = new UserSettings({birthdate: new Date(),email: "angel.goez", gender: "M", lastOpenFolder: '/home', name: "Angel Mauel Góez Giraldo", role: "ADMIN", workingDirectory: '/home'})