import {
  CalendarDays,
  LayoutDashboard,
  ListTodo,
  NotebookTabs,
  ShoppingCart,
  Target,
  Trophy,
} from 'lucide-react'

export const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: ListTodo, label: 'Tareas', path: '/tareas' },
  { icon: CalendarDays, label: 'Calendario', path: '/calendario' },
  { icon: NotebookTabs, label: 'Notas', path: '/notas' },
  { icon: Target, label: 'Misiones', path: '/misiones' },
  { icon: Trophy, label: 'Logros', path: '/logros' },
  { icon: ShoppingCart, label: 'Tienda', path: '/tienda' },
]
