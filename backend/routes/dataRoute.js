const express =  require('express');
const  {DataSaveController} =require ('../controller/dataController.js');
const router=express.Router();

router.post('/savedata',DataSaveController);

module.exports = router;
