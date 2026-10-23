function BorderAnimated({ children }) {
  return (
    
<div className="w-full h-full [background:linear-gradient(45deg,#080d0b,theme(colors.emerald.950)_50%,#080d0b)_padding-box,conic-gradient(from_var(--border-angle),#244a3b_80%,_#b89550_86%,_#f5dda5_90%,_#d4af65_94%,_#244a3b)_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
  {children}
</div>

  );
}
export default BorderAnimated;