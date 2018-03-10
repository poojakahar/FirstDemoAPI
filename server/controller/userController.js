var mongoose=require('../db/db');
var User=require('../model/User');
var bcrypt=require('bcrypt');

exports.getAll=(req,res)=>{
    User.find().then((docs)=>{
        res.json(docs);
    },(err)=>{
        res.json("0")
    }).catch((err)=>{
        res.json("0")
    });
}

exports.signUp=(req,res)=>{
    var usr=new User();

    usr.username=req.body.username;
    usr.password=bcrypt.hashSync(req.body.password,10);

    usr.save().then((docs)=>{
        res.json("1");
    },(err)=>{
        res.json("0" + err)
    }).catch((err)=>{
        res.json("0 Catch: " + err)
    });
}
