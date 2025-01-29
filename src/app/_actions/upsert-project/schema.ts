import { z } from 'zod'

export const upsertProjectSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().min(5),
})
