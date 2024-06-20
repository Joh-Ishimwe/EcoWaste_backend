import UserModel from "../models/user.model.js";
import asyncWrapper from "../middlewares/async.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Token from '../models/token.model.js';
import configrations from '../configs/index.js'
import { sendEmail } from "../utils/sendEmail.js";
import { otpGenerator } from "../utils/otp.js";
import { BadRequestError } from "../errors/index.js";
import { UnauthorizedError } from "../errors/index.js";
import { validationResult } from "express-validator";



export const allUsers= async (req, res) => { 
    try {
      const listUsers = await UserModel.find();
      res.status(200).json({
        message: 'List of all users',
        users: listUsers
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error" });
    }};

  export const deleteUsers= async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await UserModel.findByIdAndDelete(id);
      res.status(200).json({
        message: 'User deleted',
        user: deletedUser
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server error" });
    }
}
