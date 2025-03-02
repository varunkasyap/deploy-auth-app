const { signup, login, updateUser, deleteUser } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

router.put('/update', updateUser);
router.delete('/delete', deleteUser);

module.exports = router;