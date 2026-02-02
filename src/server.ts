import fastify from "fastify";
import { routes } from "./routes.js";
const app = fastify();

app.register(routes);

app.listen({ port: 3333, host: "0.0.0.0" }, () =>
  console.log("servidor rodando"),
);
