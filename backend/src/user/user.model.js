import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';
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
        trim: true,
        unique: true
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
//aacoding to the mongoose documentation we can use the pre method to do some operation before saving the data in the database.
// here we are using the pre method to hash the password before saving the data in the database.
//The pre method takes two arguments first is the name of the method and second is the callback function which will be executed before saving the data in the database.
//2 parameter like save method then the (function ) wit the => next 
userSchema.pre('save',function (next){
    const hashedPass = await  bcrypt.hash(this.password.toString(), 12 );   // this will hash the password with a salt round of 10.
    console.log(hashedPass);
    this.password = hashedPass; // this will replace the plain text password with the hashed password.next(); // this will call the next middleware in the stack.
    next();
}); 
const UserModel = model("User", userSchema); /* here we denine the model that imorted and we pass the 
                                                mongodb string cllection name "User" here the batabase it will interact with and 
                                                then the Schema we written as a blueprint */

export default UserModel; 