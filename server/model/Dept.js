var mongoose=require('./../db/db');

var SDept=mongoose.Schema({
  dept_name:{
    type: String,
    unique:true,
    require:true
  },
  isdel:{
    type: Boolean
  }
})

SDept.pre('save',function(next){
  var dept=this;

  console.log("In Trigger");
  if(dept.isModified('dept_name'))
  {
      console.log(dept.dept_name);
  }

  if(dept.dept_name=='')
  {
    console.log('Plz enter dept name')
    next('Plz enter dept name')
  }
  else {
    next()
  }
  //next();
})

var Dept=mongoose.model('Dept',SDept);
module.exports=Dept;
