const express =  require('express');
const { registerController, loginController, verifyEmail ,forgotPassword,
    resetPassword, getUser, getAnnouncement, updateAnnouncement, reVerifyMail, deleteController , getUserByEmail , updateUserType} =require ('../controller/authController.js');
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

router.get('/getuser',getUser)

router.get('/getinformed',getAnnouncement)

router.put('/updateinformed',updateAnnouncement)

router.post('/reverify',reVerifyMail)

router.delete('/delete_user/:id',deleteController);

router.get('/user/:email', getUserByEmail);

router.post('/update-user-type', updateUserType);




module.exports = router;