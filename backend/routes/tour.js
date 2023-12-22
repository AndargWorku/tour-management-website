
import express from "express"
import {createTour,updateTour,deleteTour,getSingleTour,getAllTour, getTourBySearch,getFeaturedTour,getTourCount} from "./../controllers/tourController.js"

const router=express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"

//create new tour

router.post("/",verifyAdmin, createTour);


//update tour
router.put("/:id",verifyAdmin, updateTour);

//delete tour
router.delete("/:id",verifyAdmin, deleteTour);
//getSingle tour
router.get("/:id",getSingleTour);

//get all tour
router.get("/",getAllTour);

//get by search

router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTour",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);

export default router;