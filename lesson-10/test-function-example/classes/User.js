export default class User {
    constructor(name, lastName, birthday) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    get fullName(){
        retutn `${this.name} ${this.lastName}`
    }
}

