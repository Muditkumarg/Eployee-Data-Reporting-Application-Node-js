const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required:true
    },

    phone: {
        type:String,
        required:true
    },

    password: {
        type: String,
        required: true
    },
    conpassword:{
        type:String,
        require:true
    }

}
)
const userData = mongoose.model("mydata", userSchema);


const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
        
    },
    address:{
        type:String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    company:{
        type:String,
        required:true
    }

})
const empData = mongoose.model("EmployeeData", empSchema);



module.exports = {userData, empData};
