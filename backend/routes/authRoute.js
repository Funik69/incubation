const express =  require('express');
const { registerController, loginController, verifyEmail } =require ('../controller/authController.js');
const router=express.Router();
const {validateUser,validate}=require("../middlewares/validator.js");

//routing
//register ||Method POST
router.post('/register',validateUser,validate, registerController);

//login
router.post('/login',loginController)

router.post('/verify-email',verifyEmail)


module.exports = router;