var express=require("express");
var app=express();

////
var bodyparser=require("body-parser");
var cors=require("cors");
var mongoose=require("mongoose");
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
  };
  
  app.use(cors(corsOptions));

///////////////////Database connecting

mongoose.connect('mongodb+srv://peddaudaykiran1:QVzELrpu9BSh4FEv@cluster0.83wx5vb.mongodb.net/host', { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(){
    console.log("Database connected Sucessfulyl!");
})
.catch(function(err){
    console.log("Error in the Data base connection!"+err);
})

////////////////////////////


//routers.......

var Register=require("./routers/registerrouter");


//

app.use("/",Register);

app.listen(5000,function(err){
    if(err){
        console.log("Error in the server Ruinning!");
    }
    else{
        console.log("Server is Running!");

    }
})