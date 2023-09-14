import { fastify } from "fastify";
import { listPromptsRoute } from "./routes/list-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

app.register(listPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP Server Running! 🚀"));
