'use server'

import { db } from '../_lib/prisma'

export const getProjectById = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  return await db.projeto.findUnique({
    where: {
      id: (await params).id,
    },
  })
}
