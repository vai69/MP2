const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/authenticate");
 
require('../db/conn');

const User = require("../model/userSchema");

const Transporter = require("../model/transporterSchema");

const Truck = require("../model/truckSchema");

const Booking = require("../model/bookingSchema");
const { update } = require('../model/userSchema');

router.get("/",(req,res) => {
  res.send('Hello from router');
});

// using promises
// router.post("/register",async(req,res)=>{
//   // console.log({message : req.body});
//   const{name, email, phone, work, password, cpassword}= req.body;

//   if(!name|| !email|| !phone|| !work||!password|| !cpassword){
//     return res.status(422).json({error : "Plz filled the field properly"});
//   }
//   User.findOne({email : email})
//     .then((userExits)=>{
//       if(userExits){
//         return res.status(422).json({erro:" User Exists"});
//       }
//       const user = new User({name,email,phone,work,password,cpassword});
//       user.save().then(()=>{
//         res.status(201).json({message:"user registerd successfully"});
//       }).catch((err)=>res.status(500).json({error : "Failed"}))
//     }).catch(err =>{console.log(err);});
// });

//register route
router.route("/register").post(async(req,res)=>{
  const{name, email, phone, work, password, cpassword}= req.body; 
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.work);
  console.log(req.body.password);
  console.log(req.body.cpassword);
  if(!name|| !email|| !phone|| !work||!password|| !cpassword){
    return res.status(422).json({error : "Plz fill the field properly"});
  }
  else{
  try{
    const userExits = await User.findOne({email: email});
    if(userExits){
      console.log("User Exits");
      return res.status(422).json({err:" User Exists"});
    }else if(password != cpassword){
      console.log("Error password not matching");
      return res.status(422).json({err:" password not matching"});
    }else{
      const user = new User({name,email,phone,work,password,cpassword});
      const userRegister =  await user.save();
      console.log('${user} user Register success');
      console.log(userRegister);
      res.status(201).json({ message:"user registerd successfully" });
  
    }

  }catch(err){
    console.log(err);
  }
  }
});

router.route("/addTruck").post(async(req,res)=>{
  const{name, number, pickupcity, dropcity, company, capacitty,adminemail}= req.body; 
  console.log(req.body.name);
  console.log(req.body.number);
  console.log(req.body.pickupcity);
  console.log(req.body.dropcity);
  console.log(req.body.company);
  console.log(req.body.company);
  console.log(req.body.admin);
  const status = "true";  
  if(!name|| !number|| !pickupcity|| !dropcity||!company|| !adminemail){
    return res.status(422).json({error : "Plz fill the field properly"});
  }
  try{
    const truckExits = await Truck.findOne({number : number});
    if(truckExits){
      console.log("truck Exits");
      return res.status(422).json({err:" truck Exists"});
    }else{
      const truck = new Truck({name, number, pickupcity, dropcity, company,capacitty, status, adminemail});
      const truckRegister =  await truck.save();
      console.log('admin Register success');
      console.log(truckRegister);
      res.status(201).json({ message:"Truck registerd successfully"});
  
    }
  }catch(err){
    console.log(err);
  }
});


router.route("/trans/trucklist").get(async(req,res)=>{
  const{transemail} = req.body;
  console.log(req.body.adminemail)
  if(!transemail)
  {
    return res.status(422).json({error : "Pls fill the field properly"});
  }
  try{
    const truckList = await Truck.find({transemail:transemail});
    console.log(truckList);
    res.send(truckList)
  }catch(err){
    console.log(err)
  }

});

router.route("/userTruckList").get(async(req,res)=>{
  const{pickupcity, dropcity, capacitty} = req.body;
  console.log(req.body.pickupcity)
  console.log(req.body.dropcity)
  try{
    const truckList = await Truck.find({pickupcity:pickupcity, dropcity:dropcity,status : true, capacitty:{$gt: capacitty}});
    if(truckList.length<=0)
        res.send({err : "No Truck Found"});
    console.log(truckList);
    console.log(truckList[0].company);
    res.send(truckList)
  }catch(err){
    console.log(err);
  }
})

router.route("/registerTransporter").post(async(req,res)=>{
  const{name, email, phone, work, password, cpassword}= req.body; 
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.phone);
  console.log(req.body.work);
  console.log(req.body.password);
  console.log(req.body.cpassword);
  if(!name|| !email|| !phone|| !work||!password|| !cpassword){
    return res.status(422).json({error : "Plz fill the field properly"});
  }
  try{
    const transporterExits = await Transporter.findOne({email: email});
    if(transporterExits){
      console.log("Admin Exits");
      return res.status(422).json({err:" Transporter already exists"});
    }else if(password != cpassword){
      console.log("Error password not matching");
      return res.status(422).json({err:" password not matching"});
    }else{
      const transporter = new Transporter({name,email,phone,work,password,cpassword});
      const transRegister =  await transporter.save();
      console.log(transporter+'transporter Register success');
      console.log(transRegister);
      res.status(201).json({ message:"Transporter registerd successfully" });
    }
  }catch(err){
    console.log(err);
  }
});


//login route
router.post("/signin",async(req,res)=>{
  try{
    let token; 
    const{email,password} = req.body;
    if(!email||!password){
      return res.status(400).json({error : "Plz fill the field properly"});
    }

    const userLogin= await User.findOne({email : email});
    

    if(userLogin){
      const isMatch = await bcrypt.compare(password,userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      await res.cookie('jwt',token,{
        expires: new Date(Date.now()+25892000000),
        httpOnly:true
      });
      res.json({token});

      if(!isMatch){
        res.status(400).json({error : "invalid pass or email"});
      }
      else{
        res.status(200).json({message : "Login Success", token: token});
      }    
    }else{
      return res.status(400).json({error : "Invalid credentials"});
    }
  
  }catch(err){
    console.log(err);
  }
});


router.post("/Transsignin",async(req,res)=>{
  try{
    let token; 
    const{email,password} = req.body;
    if(!email||!password){
      return res.status(400).json({error : "Plz fill the field properly"});
    }
    else{
      const transLogin= await Transporter.findOne({email : email});
      if(transLogin){
        const isMatch = await bcrypt.compare(password,transLogin.password);
        token = await transLogin.generateTransporterAuthToken();
        console.log(token);
  
        await res.cookie('jwt',token,{
          expires: new Date(Date.now()+25892000000),
          httpOnly:true
        });
        res.json({token});
        
        if(!isMatch){
          res.status(400).json({error : "invalid pass or email"});
        }
        else{
          res.status(200).json({message : "Login Success", token: token});
        }    
      }else{
        return res.status(400).json({error : "Invalid credentials"});
      }
    }
  }catch(err){
    console.log(err);
  }
});

//booking
router.route('/booking').post(async(req,res)=>{
    try{
      const {user, pickupcity, dropcity, date, weight, price, adminemail} = req.body;
      const book = new Booking({user, pickupcity, dropcity, date, weight, price, adminemail});
      const bookReq = book.save();
      console.log(bookReq);
      res.status(201).json({message:"Booking data saved successfully"});

    }catch(err){
        console.log(err);
    }
});

router.route('/bookingRequests').get(async(req,res)=>{
    try{
      const transemail = req.body.transemail;
      const result = await Booking.find({transemail : transemail});
      console.log(result);
      res.status(200).json(result)
    }catch(err){
      console.log(err)
    }
});


router.route('/trucks').get(async(req,res)=>{
  try{
    var truckList = await Truck.find();
    res.status(200).json(truckList);s
  }catch(err){
    console.log(err);
  }
})



//about page
router.route('/about').get(Authenticate,(req,res)=>{
  res.send("Hello about World");
  console.log(req.rootUser);
  res.send(req.rootUser);
});


module.exports = router;
