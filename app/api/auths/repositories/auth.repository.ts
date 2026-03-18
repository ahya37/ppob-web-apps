import { Users } from "@/app/database/entities";
import { LoginRequest } from "../interfaces";

export class AuthRepository {
  async login(data: LoginRequest) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      return response.json();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async findByCondition(data: LoginRequest) {
    const user = await Users.findOne({
      where: {
        Email: data.email,
      },
    });

    return user;
  }
}
