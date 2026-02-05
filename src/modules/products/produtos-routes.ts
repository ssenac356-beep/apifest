import type { FastifyInstance } from "fastify";
import { createProd, listPrd } from "./produtos-controller.js";

export async function userRoutes(app: FastifyInstance) {
  app.post("/create", createProd);  
  app.get("/list", listPrd);
}

/* id userId desc preco estoque    nnn  */
  