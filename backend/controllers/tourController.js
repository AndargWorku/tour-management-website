
import Tour from "../models/Tour.js"
export const createTour=async(req,res)=>{
    const newTour=new Tour(req.body)

    try {
        const savedTour=await newTour.save()
        res.status(200).json({success:true,message:'Successfully create',
    data:savedTour})
        
    } catch (error) {
        res.status(500).json({success:false,message:'failed to created,try again'})
    }
}

//update tour

export const updateTour=async(req,res)=>{
    const id=req.params.id
try {
    const updatedTour=await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).json({success:true,message:'Successfully updated',
    data:updatedTour});

} catch (error) {
    res.status(500).json({success:false,message:'failed created'});
};
};
//delete tour
export const deleteTour=async(req,res)=>{
    const id=req.params.id;
    
    try {
        await  Tour.findByAndDelete(id);
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
 export const getSingleTour=async(req,res)=>{
       
    const id=req.params.id;
    try {
        const tour=await Tour.findAndById(id).populate("reviews");
        res.status(200).json({
            success:true,
            message:"successful",
            save:tour,
        });
            
        } catch (error) {
            res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        };
        //get All
  export const getAllTour=async(req,res)=>{
           
    const page=parseInt(req.query.page);
    // console.log(page);
    
    try {
          const tours=await Tour.find({}).populate("reviews").skip(page * 8).limit(8);
          res.status(200).json({success:true,
            count:tours.length,
            message:"successful",data:tours});      
            } catch (error) {
                res.status(404).json({
                    success:false,
                    message:"not found",
                });
            }
            };


            //get tour by search
    export const getTourBySearch=async(req,res)=>{


        //here i is case sensitive
        const city=new RegExp(req.query.city, 'i')
        const distance=parseInt(req.query.distance)
        const maxGroupSize=parseInt(req.query.maxGroupSize)

        try {
           // gte means greater than equally
           
           const tours=await Tour.find({city, distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate("reviews")
           res.status(200).json({
            success:true,
            message:"Successful",
            data:tours,
           });
        } catch (error) {
            res.status(404).json({
                success:false,
                message:"not found"
            });
            
        }
    }

    //get featured
    export const getFeaturedTour=async(req,res)=>{
           
        try {
              const tours=await Tour.find({featured:true}).populate("reviews").limit(8);
              res.status(200).json({success:true,
                message:"successful",data:tours});      
                } catch (error) {
                    res.status(404).json({
                        success:false,
                        message:"not found",
                    });
                }
                };
    
     //get tour counts
     
     export const getTourCount=async(req,res)=>{
        try {
           const tourCount=await Tour.estimatedDocumentCount();
           res.status(200).json({success:true,data:tourCount}); 
        } catch (error) {
            res.status(500).json({success:false,message:"failed to fetch"});
            
        }
     };