var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var User=require('../model/User');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');

passport.serializeUser((user,done)=>{
	done(null,user);
})

passport.deserializeUser((user,done)=>{
	done(null,user);
})

passport.use(new LocalStrategy((username, password, done)=>{
	User.findOne({username:username}).then((user)=>{
		if(!user)
		{
			console.log("Main IF" + user);
			return done(null,false);
		}
		else {
			console.log("Passord: " + password);
			console.log("User Passord: " + bcrypt.compareSync(password,user.password));
			if(!bcrypt.compareSync(password,user.password))
			{
				console.log("Main else IF");
				return done(null,false);
			}
			else {
				var t=jwt.sign({username:username},"FIRSTDEMO");

				User.findOneAndUpdate({username:user.username,password:user.password},{
					$set:{
						token:t
					}
				}).then((docs)=>{
					console.log("then" + docs);
					token=t;
					return done(null,true);
				},(err)=>{
					console.log("inner error" + err);
					return done(null,false);
				}).catch((err)=>{
					console.log("inner catch" + err);
					return done(null,false);
				})
			}
		}
	},(err)=>{
		console.log("outer error" + err);
		return done(null,false);
	}).catch((err)=>{
		console.log("outer catch" + err);
		return done(null,false);
	});
}));

module.exports=passport
