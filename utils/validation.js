import { body } from "express-validator";
import Joi from 'joi';

export const signUpValidations = [
    body("userName", "User name is required").not().isEmpty(),
    body("emailAddress", "Email is required").not().isEmpty(),
    body("emailAddress", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("role", "Role is required").not().isEmpty()
];

export const signInValidations = [
    body("emailAddress", "Email is required").not().isEmpty(),
    body("emailAddress", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Invalid password").isStrongPassword()
];

export const forgotPasswordValidation = [
    body("email", "Email must be provided").not().isEmpty(),
];

export const resetPasswordValidation = [
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];

export const otpValidation = [
    body("otp", "Otp must be provided").not().isEmpty(),
];




