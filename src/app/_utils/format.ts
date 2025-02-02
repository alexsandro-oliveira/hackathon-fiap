export const formatDeadline = (value: string) => {
  switch (value) {
    case 'month_3':
      return 'até 3 meses'
    case 'month_6':
      return 'até 6 meses'
    case 'month_12':
      return 'até 12 meses'
    default:
      return value
  }
}
