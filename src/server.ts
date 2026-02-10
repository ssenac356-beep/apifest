import fastify from "fastify";
import { routes } from "./routes.js";
import jwt from "@fastify/jwt";
import { ZodError } from "zod";
const app = fastify();
const JWT_SECRET = "897874487fdsfdsf";
app.register(routes);
app.register(jwt, { secret: JWT_SECRET });

/*  */
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation Failed", issues: error.format() });
  }
  return reply.status(500).send({ messege: "Iternal server error" });
});

app.listen({ port: 3333, host: "0.0.0.0" }, () =>
  console.log("servidor rodando"),
);
