import express from 'express';
import { createUser, getUserById, getUsers } from '../controllers/user.controller';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.get('/', getUsers)

export default router;
