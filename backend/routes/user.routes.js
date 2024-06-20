import express from 'express';
const userRouter = express.Router();

import { SignUp, SignIn, ValidateOpt, ForgotPassword, ResetPassword } from '../controllers/user.controller.js';
import {allUsers,deleteUsers} from '../controllers/admin.controller.js'
import { signUpValidations, signInValidations, otpValidation, forgotPasswordValidation, resetPasswordValidation } from '../utils/validation.js';
import {createReachout,getReachout,deleteReachout} from '../controllers/reachout.controller.js'; 

import authMiddleware from '../middlewares/auth.js';




import {authorizeRoles} from '../middlewares/role.js'
import multer from "multer"



userRouter.post('/signup', signUpValidations, SignUp);
userRouter.post('/signin', signInValidations, SignIn);
userRouter.post('/verify', otpValidation, ValidateOpt);
userRouter.post('/forgotPassword', forgotPasswordValidation, ForgotPassword);
userRouter.post('/resetPassword', resetPasswordValidation, ResetPassword);


userRouter.post('/createReachout',createReachout);
userRouter.get('/viewallReachout',getReachout);
userRouter.delete('/viewReachout/:id',deleteReachout)





userRouter.get('/allusers', allUsers);
userRouter.delete('/delete/:id',deleteUsers);

export default userRouter;
