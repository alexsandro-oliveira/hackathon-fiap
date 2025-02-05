import { DeadlineOpton } from '@prisma/client'
import { z } from 'zod'

export const upsertProjectSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().min(5),
  fornecedor: z.string().trim().min(1),
  phones: z.string().trim().min(1),
  region: z.string().trim().min(1),
  deadline: z.nativeEnum(DeadlineOpton),
})
