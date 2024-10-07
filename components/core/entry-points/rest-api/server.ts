import fastify from "fastify";
import config from "./plugins/config";

import indexRoutes from "./routes";

const server = fastify({
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    },
  },
  logger: true,
});

await server.register(config);
await server.register(indexRoutes, { prefix: "/api/core" });

await server.ready();

export default server;
