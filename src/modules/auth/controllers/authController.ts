import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export const loginController = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const result = authService.login(username, password);

    res.json(result);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const profileController = (req: Request, res: Response) => {
  res.json({
    message: "Protected profile data",
    user: (req as any).user,
  });
};
