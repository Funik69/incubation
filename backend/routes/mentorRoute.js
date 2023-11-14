const express =  require('express');
const  {MentorSaveController} =require ('../controller/mentorController.js');
const router=express.Router();
router.post('/mentordata',MentorSaveController);
module.exports = router;
