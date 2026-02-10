import type { FastifyInstance } from "fastify";
import { verify } from "../../middleware/verify-jwt.js";
import { create, list } from "./comments-controller.js";

export async function userRoutes(app: FastifyInstance) {
  app.addHook("preHandler", verify);
  app.post("/me", create);
  app.get("/me", list);
}

/* id userId desc preco estoque    nnn  */
