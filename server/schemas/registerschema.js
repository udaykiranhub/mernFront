var mongoose=require("mongoose");

var schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})


module.exports=mongoose.model("Register",schema);