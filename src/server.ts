import { fastify } from "fastify";
import { listPromptsRoute } from "./routes/list-prompts";

const app = fastify();

app.register(listPromptsRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server Running! 🚀"));
