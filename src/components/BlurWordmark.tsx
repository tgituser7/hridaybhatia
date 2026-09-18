import LogoMark from "./LogoMark";

export default function BlurWordmark() {
  return (
    <div className="relative flex items-center gap-3 text-black">
      <span className="flex h-16 w-16 items-center justify-center rounded-lg border-[3px] border-black p-3">
        <LogoMark className="h-full w-full" color="#000000" waveColumns />
      </span>
      <span className="text-4xl font-bold tracking-tight" aria-label="hriday">
        {"hriday".split("").map((ch, i) => (
          <span key={i} className="blur-letter" aria-hidden="true" style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
            {ch}
          </span>
        ))}
      </span>
    </div>
  );
}
