import { fastify } from "fastify";
import { listPromptsRoute } from "./routes/list-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";

const app = fastify();

app.register(listPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server Running! 🚀"));
