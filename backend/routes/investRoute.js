const express =  require('express');
const  {InvestSaveController,InvestorGetController,updateData,deleteData} =require ('../controller/investController.js');
const router=express.Router();
router.post('/investdata',InvestSaveController);
router.get('/get_investor',InvestorGetController);
router.put('/updatedata/:_id',updateData);
router.delete('/deletedata/:_id',deleteData);
module.exports = router;
