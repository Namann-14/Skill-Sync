const express = require('express');
const RegisterController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const profileController = require('../controllers/getUserProfileController');



const router = express.Router();

router.post("/register",RegisterController);
router.post('/login',loginController);
router.get("/profile",profileController);



module.exports = router;