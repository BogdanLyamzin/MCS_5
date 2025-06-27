const createUser = (name: string, lastName: string)=> {
    const user = {
        name,
        lastName,
        get fullName(){
            return `${this.name} ${this.lastName}`
        }
    }
    return user;
}
