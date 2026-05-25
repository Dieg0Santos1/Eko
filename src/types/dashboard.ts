export type Priority = 'Alta' | 'Media' | 'Baja'

export type DayPlanItem = {
  time: string
  title: string
  done?: boolean
  tag?: Priority
  people?: number
}

export type ProductivityPoint = {
  hour: string
  value: number
}

