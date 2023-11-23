const express =  require('express');
const  {InvestSaveController,InvestorGetController} =require ('../controller/investController.js');
const router=express.Router();
router.post('/investdata',InvestSaveController);
router.get('/get_investor',InvestorGetController);
module.exports = router;
