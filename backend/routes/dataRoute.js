const express =  require('express');
const  {DataSaveController , getData , getSingleData} =require ('../controller/dataController.js');
const router=express.Router();
router.post('/savedata',DataSaveController);
router.get('/getdata',getData);
router.get('/getsingledata/:_id' , getSingleData);
module.exports = router;
