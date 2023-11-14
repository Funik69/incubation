const express =  require('express');
const  {InvestSaveController} =require ('../controller/investController.js');
const router=express.Router();
router.post('/investdata',InvestSaveController);
module.exports = router;
