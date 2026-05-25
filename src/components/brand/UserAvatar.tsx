export function UserAvatar() {
  return (
    <div className="relative mx-auto grid size-44 place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_22%,rgba(168,85,247,0.45),transparent_36%),linear-gradient(160deg,#19143b,#080d1d_65%)] shadow-[0_0_70px_rgba(139,92,246,0.28)]">
      <div className="absolute top-3 h-24 w-30 rounded-t-[42px] bg-[#171018] shadow-[0_0_22px_rgba(217,70,239,0.28)]" />
      <div className="absolute top-7 h-26 w-24 rounded-[42%] bg-[#ffc6aa]" />
      <div className="absolute top-10 h-12 w-30 rounded-t-[46px] bg-[linear-gradient(135deg,#111827,#28112d_65%,#6d28d9)]" />
      <div className="absolute top-7 left-[50%] h-10 w-16 -translate-x-1/2 rounded-full bg-[#111827]" />
      <span className="absolute top-[76px] left-[74px] size-2 rounded-full bg-[#0f172a]" />
      <span className="absolute top-[76px] right-[74px] size-2 rounded-full bg-[#0f172a]" />
      <span className="absolute top-[100px] h-2 w-7 rounded-full border-b-2 border-[#8f4e43]" />
      <div className="absolute bottom-0 h-20 w-34 rounded-t-[38px] bg-[linear-gradient(135deg,#121827,#1d1730)]">
        <div className="absolute inset-x-0 top-0 mx-auto h-12 w-18 rounded-b-[32px] border-x-4 border-b-4 border-violet-500/70" />
      </div>
    </div>
  )
}
