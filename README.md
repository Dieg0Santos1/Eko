# EKO - Asistente Inteligente de Productividad con IA

EKO es una aplicación web de productividad impulsada por Inteligencia Artificial que permite organizar tareas, eventos, notas y recordatorios mediante texto o comandos de voz.

Su objetivo es convertirse en un asistente personal inteligente capaz de comprender instrucciones naturales, organizar automáticamente el día del usuario y motivarlo mediante gamificación: experiencia, monedas, rachas, misiones, logros, avatar y fondos desbloqueables.

## Problema

Muchas personas usan varias herramientas para organizar su vida:

- Calendario
- Aplicaciones de tareas
- Notas
- Recordatorios

Esto puede generar desorganización, olvido de actividades, baja productividad y abandono de las apps por falta de motivación.

## Solución

EKO centraliza tareas, eventos y notas en una sola plataforma, con interacción por texto y voz.

Ejemplos:

- "Eko, agenda una reunión mañana a las 8 de la mañana."
- "Eko, recuérdame estudiar Base de Datos esta noche."
- "Eko, crea una nota llamada Ideas para mi startup."
- "Eko, ¿qué actividades tengo pendientes hoy?"

La IA interpreta la intención del usuario y ejecuta la acción correspondiente.

## Funcionalidades Principales

### Dashboard Inteligente

Pantalla principal con:

- Fecha y hora actual
- Resumen del día
- Próxima actividad
- Actividades pendientes y completadas
- Nivel, XP, monedas y racha
- Avatar del usuario
- Recomendaciones de EKO

### Gestión de Tareas

Permite crear tareas con título, descripción, fecha, hora, prioridad y categoría.

Estados:

- Pendiente
- En progreso
- Completada
- Cancelada

Prioridades:

- Baja
- Media
- Alta

Categorías:

- Personal
- Estudios
- Trabajo
- Salud
- Proyectos

### Calendario

Vistas diaria, semanal y mensual para tareas, eventos y recordatorios.

### Sistema de Notas

Permite crear, editar, eliminar y buscar notas. Las notas pueden ser libres o estar vinculadas a tareas/eventos.

### Comandos de Voz

Flujo esperado:

1. El usuario habla.
2. El sistema transcribe el audio.
3. OpenAI interpreta la intención.
4. EKO ejecuta la acción.
5. EKO confirma el resultado.

### Inteligencia Artificial

La IA será responsable de:

- Interpretar comandos naturales.
- Convertir lenguaje natural en acciones estructuradas.
- Organizar el día según prioridad, fecha límite y tiempo disponible.
- Generar resúmenes diarios.
- Recomendar la siguiente actividad.

Ejemplo de salida estructurada:

```json
{
  "accion": "crear_evento",
  "titulo": "Reunión",
  "fecha": "2026-05-25",
  "hora": "08:00"
}
```

### Gamificación

EKO motiva al usuario mediante:

- XP
- Monedas virtuales
- Niveles
- Rachas
- Logros
- Misiones diarias
- Avatar personalizable
- Fondos desbloqueables

## Stack Inicial

Este proyecto fue inicializado para construir primero la versión web.

Frontend:

- React
- Vite
- TypeScript
- TailwindCSS
- Lucide React
- Framer Motion
- Recharts
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Radix UI primitives
- Sonner

Futuro backend:

- Supabase
- PostgreSQL
- Supabase Auth o Clerk
- OpenAI API

Futura app móvil:

- Expo
- React Native
- Misma base de datos
- Misma API
- Misma lógica compartida

## Scripts

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Compilar:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

## MVP Web

Características mínimas:

- Registro de usuarios
- Dashboard diario
- Gestión de tareas
- Gestión de notas
- Calendario
- Comandos de voz
- IA para crear tareas y eventos
- Sistema de XP
- Sistema de monedas
- Avatar básico

## Visión

EKO transforma la productividad en una experiencia interactiva y motivadora, permitiendo gestionar tareas, eventos y notas mediante IA y comandos de voz, recompensando el progreso del usuario mediante niveles, monedas, avatares y personalización.
