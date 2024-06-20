import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const authorizeRoles = (roles) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ message: "No token provided" });
            }

            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;

            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Access denied" });
            }

            next();
        } catch (err) {
            console.error("JWT Verification Error:", err.message);
            return res.status(401).json({ message: "Unauthorized, token is invalid" });
        }
    };
};
