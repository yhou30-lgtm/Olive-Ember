export default function Logo({ light = false }: { light?: boolean }) {
  const c = light ? "#F6F1E7" : "#1D1B19";
  return (
    <span className="inline-flex items-center gap-2.5" style={{ color: c }}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3 C20 9 24 12 23 18 C22.4 23 19 26 16 26 C13 26 9.6 23 9 18 C8 12 12 9 16 3 Z" fill="#A3482A" />
        <path d="M16 12 C18 15 19.5 16.5 19 19.5 C18.7 22 17.5 23 16 23 C14.5 23 13.3 22 13 19.5 C12.5 16.5 14 15 16 12 Z" fill="#E08A57" />
        <path d="M4 29 C10 25 22 25 28 29" fill="none" stroke={light ? "#B9BE96" : "#5F6540"} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight">Olive &amp; Ember</span>
    </span>
  );
}
