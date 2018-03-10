//var db=require('../db/db');
var Emp=require('../model/Emp');

exports.newEntry=(req,res)=>{
  var d=new Emp();

  d.dept_id=req.body.dept_id;
  d.emp_name=req.body.emp_name;
  d.isdel=false;

  d.save().then((docs)=>{
    res.status(200).json(docs);
  },(err)=>{
    res.status(400).json(err);
  }).catch((err)=>{
    res.status(400).json(err);
  });
}

exports.getAll=(req,res)=>{
  Emp.find({isdel:false}).then((docs)=>{
    res.status(200).json(docs);
  },(err)=>{
    res.status(400).json(err);
  }).catch((err)=>{
    res.status(400).json(err);
  });
}

exports.getCnt=(req,res)=>{
  Emp.find().populate('dept_id').then((docs)=>{
    console.log(docs[1]["dept_id"]["dept_name"]);
    res.status(200).json(docs);
  },(err)=>{
    res.status(400).json(err);
  }).catch((err)=>{
    res.status(400).json(err);
  });
}
