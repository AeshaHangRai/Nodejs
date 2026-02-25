const User = require("../models/userModel");
const user = require("../models/userModel")
const registerUser = async (req, res) => {
 // Destructure the form or raw data
        const{firstName,lastName,email,password}=req.body;
          try{
            if(!firstName || !lastName || !email || !password){
        return res.status(400).json({success:false,message:"All fields are required"});
            }
            // Check for unique email
            const existingEmail = await  User.findOne({email:email});
            if(existingEmail){
                return res.status(400).json({
                    sucess: false,
                    message: "User already exist"
                });
   }
   const user = new User({
    firstName,
    lastName,
    email,
    password
   });
await user.save();
return res.status(201).json({
    success:true,
    message:"User registered successfully"
});
}catch(error){
return res.status(500).json({
    success:false,
    message:"Error  while registering is user:${error.message}"
});
   }
}

const loginUser = async (req, res) => {

}

module.exports = {
    register,
    login
}