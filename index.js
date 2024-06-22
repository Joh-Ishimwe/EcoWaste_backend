import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };
import configurations from "./configs/index.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import allRouter from "./routes/user.routes.js";

const app = express();

// const corsOptions = {
//   origin: [
//     "https://ecowaste-app-fh1j.onrender.com",
//     "http://localhost:5502"
//   ],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: "Content-Type, Authorization",
//   credentials: true,
// };

app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use('/api/v1', allRouter);

// Swagger setup
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Verify JWT Middleware
export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Logout endpoint
app.post('/api/v1/logout', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Logged out successfully.' });
});

// MongoDB connection
mongoose.connect(configurations.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(configurations.PORT, () => {
      console.log(`Server is running on port ${configurations.PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });

// Error handling middleware
app.use(ErrorHandler);
