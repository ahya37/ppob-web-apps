import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "./repositories";

const authRepository = new AuthRepository();

export async function login(email: string, password: string) {
  const user = await authRepository.findByCondition({ email, password });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.Password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user.Id,
      email: user.Email,
      username: user.Username,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" },
  );

  return {
    token,
    user: {
      id: user.Id,
      username: user.Username,
      email: user.Email,
    },
  };
}
