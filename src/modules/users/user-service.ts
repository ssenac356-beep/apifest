import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";

export class UserServices {
  async emailExists(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async create({ email, name, password }: Prisma.UserCreateInput) {
    await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async list() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        createAt: true,
      },
    });
    return users;
  }
}
