var mongoose=require('./../db/db');

var SEmp=mongoose.Schema({
  dept_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:['Dept']
  },
  emp_name:{
    type: String,
    unique:true,
    require:true
  },
  isdel:{
    type: Boolean
  }
})

var Emp=mongoose.model('Emp',SEmp);
module.exports=Emp;
