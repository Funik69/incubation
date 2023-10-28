const express =  require('express');
const { registerController, loginController, verifyEmail ,forgotPassword,resetPassword} =require ('../controller/authController.js');
const router=express.Router();
const {validateUser,validate}=require("../middlewares/validator.js");

//routing
//register ||Method POST
router.post('/register',validateUser,validate, registerController);

//login
router.post('/login',loginController)

router.post('/verify-email',verifyEmail)

router.post('/forgot_password',forgotPassword)

router.post('/reset-password/:id/:token',resetPassword)






module.exports = router;