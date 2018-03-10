//var db=require('../db/db');
var Dept=require('../model/Dept');

exports.newEntry=(req,res)=>{
  var d=new Dept();

  d.dept_name=req.body.dept_name;
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
  Dept.find({isdel:false}).then((docs)=>{
    res.status(200).json(docs);
  },(err)=>{
    res.status(400).json(err);
  }).catch((err)=>{
    res.status(400).json(err);
  });
}

exports.getCnt=(req,res)=>{
  Dept.count().then((docs)=>{
    res.status(200).json(docs);
  },(err)=>{
    res.status(400).json(err);
  }).catch((err)=>{
    res.status(400).json(err);
  });
}
