import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';

interface TokenPayload {
  _id: string;
  email: string;
}
interface AuthRequest extends Request {
    user?: any;
}
class AuthMiddleware {
    public static async verifyToken(req: AuthRequest, res: Response, next: NextFunction): Promise<void | Response> {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
        }
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
        

            const user = await UserModel.findById(decodedToken._id);
            if (!user) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }
            req.user = user;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
}

export default AuthMiddleware;
