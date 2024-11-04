const express = require("express");
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.getUser);
router.get('/:id', userController.getOneUser);
router.post('/', userController.createUser);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser)