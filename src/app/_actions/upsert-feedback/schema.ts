import { z } from 'zod'

export const upsertFeedbackSchema = z.object({
  name: z.string().trim().min(1),
  feedback: z.string().trim().min(5),
})
