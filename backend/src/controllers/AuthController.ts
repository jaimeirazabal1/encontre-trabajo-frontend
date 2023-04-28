import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';

interface LoginRequest {
  email: string;
  password: string;
}

interface TokenPayload {
  _id: string;
  email: string;
}

interface RegisterRequest {
  email: string;
  password: string;
}

class AuthController {
  public static async login(req: Request, res: Response): Promise<void | Response> {
    try {
      const { email, password } = req.body as LoginRequest;

      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const tokenPayload: TokenPayload = { _id: user._id.toString(), email: user.email };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string);

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public static async register(req: Request, res: Response): Promise<void | Response> {
    try {
      const { email, password } = req.body as RegisterRequest;

      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({ email, password: hashedPassword });

      await newUser.save();

      const tokenPayload: TokenPayload = { _id: newUser._id.toString(), email: newUser.email };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string);

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public static async logout(req: Request, res: Response): Promise<void> {
    try {
      // Elimina el token de la sesión del usuario
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default AuthController;
