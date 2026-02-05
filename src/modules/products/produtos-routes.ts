import type { FastifyInstance } from "fastify";
import { createProd, listPrd } from "./produtos-controller.js";
import { verify } from "../../middleware/verify-jwt.js";

export async function userRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verify);
  app.post("/create", createProd);
  app.get("/list", listPrd);
}

/* id userId desc preco estoque    nnn  */
