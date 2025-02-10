'use server'

import { db } from '../_lib/prisma'

export const getFeedbackById = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  return await db.feedback.findUnique({
    where: {
      id: (await params).id,
    },
  })
}

console.log(getFeedbackById)
