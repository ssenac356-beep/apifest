import type { FastifyReply, FastifyRequest } from "fastify";
import { userSchema } from "./user-shema.js";
import { UserServices } from "./user-service.js";
const userServices = new UserServices();

import bcrypt from "bcryptjs";

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const { email, name, password } = userSchema.parse(request.body);

  const user = await userServices.emailExists(email);

  if (user) {
    return reply.send("email já cadastrado");
  }
  const passwordHash = await bcrypt.hash(password, 6);

  await userServices.create({ name, password: passwordHash, email });

  reply.status(201).send("usuario criado");
}

export async function listUser(request: FastifyRequest, reply: FastifyReply) {
  const users = await userServices.list();
  reply.send(users);
}
