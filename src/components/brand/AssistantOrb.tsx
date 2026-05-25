import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type AssistantOrbProps = {
  size: 'xs' | 'sm' | 'lg'
}

export function AssistantOrb({ size }: AssistantOrbProps) {
  const sizes = {
    xs: 'size-9',
    sm: 'size-[52px]',
    lg: 'size-36 sm:size-44',
  }

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      className={cn(
        'relative shrink-0 rounded-full bg-[conic-gradient(from_180deg,#22d3ee,#8b5cf6,#f472b6,#22d3ee)] p-[3px] shadow-[0_0_55px_rgba(139,92,246,0.52)]',
        sizes[size],
      )}
      transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
    >
      <div className="grid h-full w-full place-items-center rounded-full bg-[#09111f]">
        <div className="relative h-[58%] w-[68%] rounded-[44%] bg-[#080d18] shadow-[inset_0_0_26px_rgba(34,211,238,0.42)]">
          <span className="absolute left-[25%] top-[36%] size-[12%] rounded-full bg-cyan-200 shadow-[0_0_12px_#67e8f9]" />
          <span className="absolute right-[25%] top-[36%] size-[12%] rounded-full bg-cyan-200 shadow-[0_0_12px_#67e8f9]" />
          <span className="absolute bottom-[25%] left-1/2 h-[7%] w-[22%] -translate-x-1/2 rounded-full border-b-2 border-cyan-200" />
        </div>
      </div>
    </motion.div>
  )
}

