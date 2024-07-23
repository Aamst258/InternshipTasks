const mongoose  =  require("mongoose") 

const userSchema   = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    }, 
    phone:{
        type:String,
        required:true,
    } ,
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

// defining model
const User = new mongoose.model('User',userSchema);

module.exports = User