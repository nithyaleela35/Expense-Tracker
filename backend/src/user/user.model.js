import {model, Schema} from 'mongoose';

// Account Creation and their schema . 
const userSchema = new Schema({
    fullname: {
        type: String, 
        required: true, 
        lowercase: true, 
        trim: true
    },
    mobile:  {
        type: String, 
        required: true,  
        trim: true
    },
    email:  {
        type: String, 
        required: true, 
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }, 
    role:{
        type: String,
        default: "user",
        enum:["user"]
    },
    status: {
        type: Boolean, 
        default: false, 
    }
}, {timestamps: true});

const UserModel = model("User", userSchema); /* here we denine the model that imorted and we pass the 
                                                mongodb string cllection name "User" here the batabase it will interact with and 
                                                then the Schema we written as a blueprint */

export default UserModel; 