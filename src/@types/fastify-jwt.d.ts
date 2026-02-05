import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWt {
    user: {
      sub: number;
    };
  }
}
