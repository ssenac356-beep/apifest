import type { FastifyInstance } from "fastify";
import { createUser, listUser } from "./user-controller.js";

export async function userRoutes(app: FastifyInstance) {
  app.post("/create", createUser);
  app.get("/list", listUser);
}

/* id userId desc preco estoque    nnn  */