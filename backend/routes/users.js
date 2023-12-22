import express from "express"
import{deleteUser,getAllUser,getSingleUser,updateUser} from "../controllers/userController.js"

const router=express.Router()

import {verifyUser,verifyAdmin} from "../utils/verifyToken.js"
//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);
//getSingle tour
router.get("/:id", verifyUser, getSingleUser);

//get all tour
router.get("/", verifyAdmin,getAllUser);

export default router;