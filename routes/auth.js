const router = require("express").Router();
const {loginuser, registerUser} = require('../services/auth.services')


router.post("/register", loginuser );



router.post('/login', registerUser);

module.exports = router;
