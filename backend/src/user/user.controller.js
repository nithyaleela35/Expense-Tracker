import UserModel from "./user.model.js";
export const createUser = async ( req, res) => {
    try{
         console.log("Create user API hit");
         const data = req.body; 
         const user = new UserModel(data);
         await user.save();
         console.log(data); 
         res.json(user);
    }catch(error){
        res.status(500).json({message : err.message}); 
    }
}
export const login = async ( req, res) => {
    try{
         const data = req.body; 
         console.log(data); 
    }catch(error){
        res.status(500).json({message : err.message}); 
    }
}