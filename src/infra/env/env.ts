import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  CLOUDFlARE_ACCOUNT_ID: z.string(),
  AWS_BUCKET_NAME: z.string(),
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  REDIS_URL: z
    .string()
    .optional()
    .default('https://proven-beetle-41838.upstash.io'),
  REDIS_TOKEN: z
    .string()
    .optional()
    .default('AaNuAAIncDEyN2M1ZWQzNDYxZmQ0YjYxOWIyOTc5ZWYxYTU3NDAwOXAxNDE4Mzg'),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>
