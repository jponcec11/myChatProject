const express = require("express");
const router = express.Router();
const userController = require('../controllers/users');

//router.get('/', userController.getAll);
//router.get('/:id', userController.getSingle);
router.post('/register', userController.createUser);
//router.put('/:id', userController.editUser);
//router.delete('/:id', userController.deleteUser)


module.exports = router;