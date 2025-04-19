import express from 'express';
import { createUser, getUsers, getUserById } from '../controllers/user.controller';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

export default router;
