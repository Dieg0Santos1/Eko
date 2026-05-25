import type { DayPlanItem, ProductivityPoint } from '@/types/dashboard'

export const dayPlan: DayPlanItem[] = [
  { time: '9:00 AM', title: 'Revisar correos importantes', done: true },
  { time: '10:00 AM', title: 'Trabajar en presentación Q3', tag: 'Alta' },
  { time: '11:00 AM', title: 'Reunión de equipo', tag: 'Media', people: 6 },
  { time: '2:00 PM', title: 'Llamada con cliente', tag: 'Alta' },
  { time: '4:00 PM', title: 'Actualizar documentación', tag: 'Baja' },
  { time: '6:00 PM', title: 'Estudiar nuevas tecnologías', tag: 'Baja' },
]

export const productivityData: ProductivityPoint[] = [
  { hour: '8', value: 18 },
  { hour: '9', value: 31 },
  { hour: '10', value: 24 },
  { hour: '11', value: 38 },
  { hour: '12', value: 34 },
  { hour: '13', value: 48 },
  { hour: '14', value: 42 },
  { hour: '15', value: 59 },
  { hour: '16', value: 66 },
]

