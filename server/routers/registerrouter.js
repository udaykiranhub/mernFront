var express=require("express");
var router=express.Router();

var Student=require("../schemas/registerschema");

router.post('/register', async (req, res) => {
try{
    const { name, email, age } = req.body;
  console.log("data is:",req.body);
    const newStudent = await Student.findOne({ email:email });
if(newStudent){
    res.status(500).json({message:"Already Registered!"});
}
else{
    var data=await Student({name,email,age})
data.save()
    .then(function(data){
        console.log("Data saved Sucessfulyl!");
    })
    .catch(function(err){
        console.log("Error in the Stuent data saving!"+err);
    })
    res.status(200).json({message:"Regsitered sucessfully!"});
}
}
catch(err){
res.status(500).json({message:"something went wrong!"});
}
  });

  module.exports=router;