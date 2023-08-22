const fastify = require("fastify")();
const port = 3000;

fastify.get("/", async (req, reply) => {
  return { hello: "World1" };
});

const start = () => {
  fastify.listen(port, () => {
    console.log("Running server...");
  });
};
start();
