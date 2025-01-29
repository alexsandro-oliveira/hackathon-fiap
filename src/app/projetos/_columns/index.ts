'use client'

import type { Projeto } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'

export const projectColumns: ColumnDef<Projeto>[] = [
  {
    accessorKey: 'name',
    header: 'Título',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row: { original: project } }) => project.description.slice(0, 100),
  },
  {
    accessorKey: 'createdAt',
    header: 'Criado em',
    cell: ({ row: { original: project } }) =>
      formatDistance(new Date(), new Date(project.createdAt), {
        locale: ptBR,
      }),
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
    cell: () => {},
  },
]
