import User from "./classes/User.js";

const newUser = new User("Bohdan", "Liamzin");

if(Object.keys(newUser).length === 2) {
    console.log("Some code");
}