import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const ghostApiUrlSchema = z.string().url();
const ghostApiKeySchema = z.string();

export const env = createEnv({
  server: {
    GITHUB_APP_ID: z.string(),
    GITHUB_APP_PRIVATE_KEY: z.string(),
    ghostContentApiUrl: ghostApiUrlSchema,
    ghostContentApiKey: ghostApiKeySchema,
  },
  client: {
    NEXT_PUBLIC_GHOST_CONTENT_API_URL: ghostApiUrlSchema,
    NEXT_PUBLIC_GHOST_CONTENT_API_KEY: ghostApiKeySchema,
  },
  runtimeEnv: {
    GITHUB_APP_ID: process.env.GITHUB_APP_ID,
    GITHUB_APP_PRIVATE_KEY: process.env.GITHUB_APP_PRIVATE_KEY,
    ghostContentApiUrl: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_URL,
    ghostContentApiKey: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY,
    NEXT_PUBLIC_GHOST_CONTENT_API_URL:
      process.env.NEXT_PUBLIC_GHOST_CONTENT_API_URL,
    NEXT_PUBLIC_GHOST_CONTENT_API_KEY:
      process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY,
  },
});
