//Define JS class and MongoDB schema for Users
const mongoose = require("mongoose");
//Define JS class
class user{
    constructor(type, first_name, last_name, username, password, email, userID){
        self.type = type,
        self.first_name = first_name,
        self.last_name = last_name,
        self.user_name = username,
        self.password = password,
        self.e_mail = email,
        self.userID = userID
    }
    get all(){
        return [self.type, self.first_name, self.last_name, self.user_name, self.password, self.e_mail, self.userID];
    }
    get usertype(){
        return self.type;
    }
    get firstname(){
        return self.first_name;
    }
    get lastname(){
        return self.last_name;
    }
    get username(){
        return self.user_name;
    }
    get pass(){
        return self.password;
    }
    get email(){
        return self.e_mail;
    }
    get ID(){
        return self.userID;
    }
};

//Define MongoDB schema
const schema_user = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "user_type required"]
    },
    first_name: {
        type: String,
        required: [false]
    },
    last_name: {
        type: String,
        required: [false]
    },
    username: {
        type: String,
        required: [true, "Username required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    email: {
        type: String,
        required: [true, "E-mail required"]
    },
    userID: {
        type: String,
        required: [true, "UserID required"]
    }
});

module.exports.user = user;
module.exports.schema_user = schema_user;