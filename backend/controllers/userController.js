
import User from "../models/Tour.js"
export const createUser=async(req,res)=>{
    const newUser=new User(req.body)

    try {
        const savedUser=await newUser.save()
        res.status(200).json({success:true,message:'Successfully create',
    data:savedUser})
        
    } catch (error) {
        res.status(500).json({success:false,message:'failed to created,try again'})
    }
}

//update tour

export const updateUser=async(req,res)=>{
    const id=req.params.id
try {
    const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).json({success:true,message:'Successfully updated',
    data:updatedUser});

} catch (error) {
    res.status(500).json({success:false,message:'failed created'});
};
};
//delete tour
export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    
    try {
        await  User.findByAndDelete(id);
        res.status(200).json({
            success:true,
            message:"successfully deleted",
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to delete",
        });
    }
    };

    //get single
 export const getSingleUser=async(req,res)=>{
       
    const id=req.params.id;
    try {
        const user=await User.findAndById(id);
        res.status(200).json({
            success:true,
            message:"successful",
            save:user,
        });
            
        } catch (error) {
            res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        };
        //get All
  export const getAllUser=async(req,res)=>{
           
    try {
          const users=await User.find({})
          res.status(200).json({success:true,
            message:"successful",data:users});      
            } catch (error) {
                res.status(404).json({
                    success:false,
                    message:"not found",
                });
            }
            };

