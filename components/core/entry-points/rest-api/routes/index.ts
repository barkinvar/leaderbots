import type { FastifyPluginAsync } from "fastify";

const routes: FastifyPluginAsync = async (server) => {
  server.get("/", async (request, reply) => {
    return { hello: "world" };
  });
};

export default routes;
