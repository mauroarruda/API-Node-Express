import { Router } from 'express';
import { UserController } from './controllers/userController';

const router = Router();

const userController = new UserController();

//CREATE
router.post('/users', userController.create);

//READ
router.get('/users', userController.read);

//READ BY ID
router.get('/users/:id', userController.readById);

//UPDATE
router.put('/users/:id', userController.update);

//DELETE
router.delete('/users/:id', userController.delete);

export { router };
