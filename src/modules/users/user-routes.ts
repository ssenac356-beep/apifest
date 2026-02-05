import type { FastifyInstance } from "fastify";
import { auth, createUser, listUser } from "./user-controller.js";
import { verify } from "../../middleware/verify-jwt.js";

export async function userRoutes(app: FastifyInstance) {
  app.post("/create", createUser);
  app.post("/auth", auth);
  app.get("/me", { onRequest: [verify] }, listUser);
}

/* id userId desc preco estoque    nnn  */
