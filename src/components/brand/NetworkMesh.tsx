export function NetworkMesh() {
  return (
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 h-60 w-full bg-[radial-gradient(circle_at_70%_65%,rgba(168,85,247,0.32),transparent_30%),linear-gradient(135deg,transparent_10%,rgba(34,211,238,0.16)_48%,transparent_51%)]" />
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          className="absolute size-1 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,0.9)]"
          key={index}
          style={{
            bottom: `${15 + ((index * 19) % 52)}%`,
            right: `${4 + ((index * 13) % 84)}%`,
            opacity: 0.36 + (index % 4) * 0.15,
          }}
        />
      ))}
    </div>
  )
}

