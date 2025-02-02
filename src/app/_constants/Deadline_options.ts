import { DeadlineOpton } from '@prisma/client'

export const DEADLINE_OPTIONS = [
  { value: DeadlineOpton.month_3, label: 'até 3 meses' },
  { value: DeadlineOpton.month_6, label: 'até 6 meses' },
  { value: DeadlineOpton.month_12, label: 'até 12 meses' },
]
