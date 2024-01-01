const express =  require('express');
const  {MentorSaveController, MentorGetController,updateData,deleteData} =require ('../controller/mentorController.js');
const router=express.Router();
router.post('/mentordata',MentorSaveController);
router.get('/get_mentor',MentorGetController);
router.put('/updatedata/:_id',updateData);
router.delete('/deletedata/:_id',deleteData);
module.exports = router;
