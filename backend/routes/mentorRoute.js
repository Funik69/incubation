const express =  require('express');
const  {MentorSaveController, MentorGetController} =require ('../controller/mentorController.js');
const router=express.Router();
router.post('/mentordata',MentorSaveController);
router.get('/get_mentor',MentorGetController);
module.exports = router;
