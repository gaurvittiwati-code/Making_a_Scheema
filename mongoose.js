const dotenv = require('dotenv')

const mongoose = require("mongoose")

mongoose.config(process.env.MongoDB_URI)

.then(() =>{
    console.log("MongoDB connected Successfully");
    
})
.catch((error)=>{
    console.log("MongoDB connecton error");
    

})