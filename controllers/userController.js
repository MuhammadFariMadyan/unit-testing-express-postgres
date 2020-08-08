const { User } = require("../models");

module.exports = {

  createRegister : async (req, res) =>{
    const { name, email, password } = req.body;
    
    try {
      const user = await User.create({
        name, email, password
      })
      res.status(201).json({
        message: "success create user",
        user
      })
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  },

  login : async (req, res) => {
    const { email, password}  = req.body;
    try {
      const checkUser = await User.findOne({
        where: { email }
      })

      if(!checkUser) return res.status(404).json({message: "User not found"});
      
      const isPasswordTrue = checkUser.checkPassword(password, checkUser.password);
      
      if(!isPasswordTrue) return res.status(404).json({message: "Invalid login"});
      
      res.status(200).json({
        message: "success login",
        checkUser
      }) 
      
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  },

  getAllUser : async (req, res) => {
    try {
      const user = await User.findAll();

      res.status(200).json({
        message:"read all user",
        user
      })
      
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  },

  findUser :  async (req, res) => {
    const {idUser} = req.params
    try {
      const user = await User.findOne({
        where:{ id : idUser }
      })

      if(!user) return res.status(404).json({ message : "User not found"});

      res.status(200).json({
        message: "success read single user",
        user
      })
      
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  },

  updateUser : async (req, res) => {
    const { idUser } = req.params;
    const { name, email} = req.body;
    try {
      const user = await User.findOne({
        where:{ id : idUser}
      })

      if(!user) return res.status(404).json({ message: "User not found"});

      user.name =  name;
      user.email = email;
      await user.save();

      res.status(200).json({
        message : "update user",
        user
      })
      
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  },

  deleteUser : async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await User.findOne({
        where: { id : idUser}
      })

      if(!user) return res.status(404).json({ message :  "User not found"});

      await user.destroy();

      res.status(200).json({
        message : "delete user",
        user
      })
    } catch (error) {
      res.status(500).json({message: "Internal server error"})
    }
  }

}