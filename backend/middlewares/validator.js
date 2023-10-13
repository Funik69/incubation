const { check,validationResult } = require("express-validator");
exports.validateUser = [
  check("fname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is missing ")
    .isLength({ min: 3, max: 20 })
    .withMessage("Invalid Name"),
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing ")
    .isLength({ min: 8, max: 20 })
    .withMessage("Invalid Password, Password length must be between 8 to 20 characters"),
];

exports.validate=(req,res,next)=>{
    const error= validationResult(req).array()
    if(error.length==0){
        return next();
    }
    res.status(400).json({
        success:false,
        error:error[0].msg
    })
}
