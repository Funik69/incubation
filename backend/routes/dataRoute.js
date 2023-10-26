const express =  require('express');
const  {DataSaveController, getData} =require ('../controller/dataController.js');
const router=express.Router();

router.post('/savedata',DataSaveController);
router.get('/getdata',getData);

module.exports = router;
