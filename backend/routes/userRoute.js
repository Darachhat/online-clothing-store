import express from 'express';
import { loginUser,registerUser,adminLogin, userList } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/list', userList); 

export default userRouter;