import fastify from "fastify";
import { routes } from "./routes.js";
import jwt from "@fastify/jwt";
const app = fastify();
const JWT_SECRET = "897874487fdsfdsf";

app.register(routes);
app.register(jwt, { secret: JWT_SECRET });

const user = [
  {
    id: 1,
    comment: "user1",
  },
  {
    id: 2,
    comment: "user2",
  },
];

app.post("/", (request, reply) => {
  const token = app.jwt.sign({ id: 1 });
  reply.send({ token });
});

app.get("/buscar", async (request, reply) => {
  try {
    await request.jwtVerify();
    const userID = request.user.id;
    const dados = user.filter((u) => u.id == userID);

    reply.send(dados);
  } catch (error) {
    reply.status(401).send("token invalido");
  }
});

app.listen({ port: 3333, host: "0.0.0.0" }, () =>
  console.log("servidor rodando"),
);
