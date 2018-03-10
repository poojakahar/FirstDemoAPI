exports.route=(app)=>{
  var userController=require('../controller/userController')
  var PassportLocal=require('../auth/LocalPassport')
  var deptController=require('../controller/deptController')
  var empController=require('../controller/empController')

  app.post("/signUp",userController.signUp);

  app.post("/signIn",PassportLocal.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/fail"
  }))

  app.get("/",(req,res)=>{
    res.json(token)
  })

  app.get("/fail",(req,res)=>{
    res.json("0")
  })

  //dept
  app.post("/dept",deptController.newEntry);
  app.get("/dept",deptController.getAll);
  app.get("/deptcnt",deptController.getCnt);

  //Emp
  app.post("/emp",empController.newEntry);
  app.get("/emp",empController.getAll);
  app.get("/empcnt",empController.getCnt);

}
