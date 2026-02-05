import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";

export class UserServices {
  async emailExists(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async create({ email, name, password }: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return user;
  }

  async list({ userId }: { userId: string }) {
    const users = await prisma.user.findMany({
      where: { id: userId },
    });
    return users;
  }
}
