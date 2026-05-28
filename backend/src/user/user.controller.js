export const createUser = async ( req, res) => {
    try{
         console.log("Create user API hit");
         const data = req.body; 
         console.log(data); 
         res.json({message: "Request received"});
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