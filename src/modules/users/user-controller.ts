import type { FastifyReply, FastifyRequest } from "fastify";
import { authSchema, userSchema } from "./user-shema.js";
import { UserServices } from "./user-service.js";
const userServices = new UserServices();

import bcrypt from "bcryptjs";

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const { email, name, password } = userSchema.parse(request.body);

  const userExists = await userServices.emailExists(email);

  if (userExists) {
    return reply.send("email já cadastrado");
  }
  const passwordHash = await bcrypt.hash(password, 6);

  const user = await userServices.create({
    name,
    password: passwordHash,
    email,
  });

  const token = await reply.jwtSign({}, { sign: { sub: user.id } });

  reply.status(201).send({ token });
}

export async function auth(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = authSchema.parse(request.body);
  const user = await userServices.emailExists(email);

  if (!user) {
    throw new Error("email ou senha invalidos");
  }
  // TODO:VERIFICAR A SENHA DO USUÁRIO
  const token = await reply.jwtSign({}, { sign: { sub: user.id } });
  /*  */
  reply.status(201).send({ token });
}

export async function listUser(request: FastifyRequest, reply: FastifyReply) {
  console.log(request.user);
  
  const users = await userServices.list({
    userId: request.user.sub,
  });

  reply.send(users);
}
