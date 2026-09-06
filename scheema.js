const mongoose = require("mongoose")
import brcypt from "bcrypt"

const userScheema = new mongoose.Schema({

    name:{
        type:String,
        required:true

    },

    email:{
        type:String,
        required:true,
        unique:true


    },
    password:{
        type:number
    }
})

const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    await brcypt.hash(this.password,10)
    next()
})


userSchema.methods.isPasswordCorrect = async function(password){
    return await brcypt.compare(password, this.password)
}

module.exports = User; 