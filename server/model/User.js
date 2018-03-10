var mongoose=require('mongoose');

var SUser=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    }
});

SUser.pre('save',(next)=>{
  console.log("Document will saved")
  next();
})

var User=mongoose.model("User",SUser);

module.exports=User;
