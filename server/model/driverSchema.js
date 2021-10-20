const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const driverSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  email:{
    type: String,
    required : true
  },
  phone:{
    type: String,
    required : true
  },
  password:{
    type: String,
    required : true
  },
  address:{
  type:String,
  required:true
  },
  tokens:[
    {
      token:{
        type: String,
        required: true
      }
    }
  ]
})

//we are hasshing the password

transporterSchema.pre('save',async function(next){
  console.log("Hi from pre");
  if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password, 12);
  }
  next();
})


//generating token
transporterSchema.methods.generateTransporterAuthToken = async function(){
  try{
    let token = jwt.sign({_id:this._id,email:this.email, name:this.name }, process.env.SECREAT_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  }catch(err){
    console.log(err)
  }
}

const driver = mongoose.model('DRIVER',driverSchema);
module.exports = driver;
