import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username : 
        {
            type : String,
            required : true,
            unique : true,
        },
        email : 
        {
            type : String,
            required : true,
            unique : true,
        },
        password : 
        {
            type : String,
            required : true,
        },
        avatar :
        {
            type : String,
            default : 'https://img.icons8.com/ios-filled/50/gender-neutral-user.png'
        }
    },
    {
        timestamps : true
    }
);

const User = mongoose.model('User',userSchema);

export default User;
