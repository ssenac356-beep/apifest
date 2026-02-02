import type { FastifyInstance } from "fastify";
import { userRoutes } from "./modules/users/user-routes.js";

export async function routes(app: FastifyInstance) {
  app.register(userRoutes, { prefix: "/users" });
  app.register(userRoutes, { prefix: "/produtos" });
}
