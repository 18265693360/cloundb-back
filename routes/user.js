const {Router} = require('express');
// const router = Router;
const router = Router();
const {register} = require('../controller/user');
const auth = require('../controller/auth');



router.post('/register', register);
router.post('/login', login);
router.get('/', auth, getUserById);


module.exports = router;