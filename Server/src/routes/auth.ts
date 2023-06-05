import express from 'express';
import { validationMiddleware } from '../middleware/validationMiddleware';
import { login, register,getUserDetails } from '../controller/auth';

const router = express.Router();

router.route("/login").post(validationMiddleware,login)

router.route("/register").post(validationMiddleware,register)

router.route("/me").get(getUserDetails)

export default router;