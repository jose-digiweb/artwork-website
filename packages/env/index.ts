import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {},
  server: {
    DATABASE_URL: z.string().min(1).url(),
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  },
});
