import jwt from "jsonwebtoken";
import { JWT_CONFIG } from "../../../core/config/jwt";

export class AuthService {
  private users = [
    { id: 1, username: "admin", password: "admin123" },
  ];

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_CONFIG.secret,
      { expiresIn: JWT_CONFIG.expiresIn }
    );

    return { token };
  }
}
