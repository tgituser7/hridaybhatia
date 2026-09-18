import LogoMark from "@/components/LogoMark";
import Wordmark from "@/components/Wordmark";
import OutlineWordmark from "@/components/OutlineWordmark";
import BlurWordmark from "@/components/BlurWordmark";

const MARQUEE_ROWS = ["marquee-left", "marquee-right", "marquee-left"];

export default function Home() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#ececec] p-6 md:p-14">
      <div className="bg-marquee" aria-hidden="true">
        {MARQUEE_ROWS.map((dir, i) => (
          <div key={i} className={`marquee-row ${dir}`}>
            {Array.from({ length: 12 }, (_, j) => (
              <span key={j}>HRIDAY</span>
            ))}
          </div>
        ))}
      </div>
      <div className="brand-grid relative z-10 w-full max-w-4xl">
        {/* Light logo card */}
        <div className="area-logoLight relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-white md:h-full">
          <BlurWordmark />
        </div>



        {/* Dark logo card */}
        <div className="area-logoDark beam relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-black md:h-full">
          <OutlineWordmark />
        </div>



        {/* Cube / lockup photo */}
        <div className="area-cube relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black md:h-full">
          <div className="anim-float absolute left-8 top-7 flex h-16 w-16 -rotate-6 items-center justify-center rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
            <LogoMark className="h-7 w-7" color="#ffffff" />
          </div>
          <div className="anim-float-delayed absolute left-20 top-16 flex h-16 w-16 rotate-6 items-center justify-center rounded-xl border-2 border-white/40">
            <LogoMark className="h-7 w-7" color="rgba(255,255,255,0.4)" />
          </div>
        </div>







        <div className="area-swatch flex h-20 gap-3 md:h-full">
          <div className="flex flex-1 items-center justify-center rounded-2xl border border-black/10 bg-[#F4F4F4] font-mono text-base font-semibold tracking-wide text-neutral-700">
            F4F4F4
          </div>
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-black font-mono text-base font-semibold tracking-wide text-white">
            000000
          </div>
        </div>

        {/* Logo construction grid */}
        <div
          className="area-diagram relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-[#fafafa] md:h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          <LogoMark className="h-28 w-auto opacity-80" color="#3f3f3f" animated />
        </div>

        {/* Dark mission photo */}
        <div
          className="area-dark sheen relative flex h-64 flex-col justify-between overflow-hidden rounded-2xl bg-[#141414] p-5 md:h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 7px)",
          }}
        >
          <Wordmark tone="light" size="sm" />
          <p className="max-w-[220px] text-sm font-medium leading-snug text-white">
            Our Mission Is to Create Technology That Doesn&apos;t Just Keep Up
            With the Future. It Helps Build It.
          </p>
        </div>

        {/* Person photo */}
        <div className="area-person sheen relative h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-600 via-neutral-900 to-black md:h-full">
          <svg
            viewBox="0 0 100 140"
            preserveAspectRatio="xMidYMax meet"
            className="anim-breathe absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <polygon points="22,140 30,72 70,72 78,140" fill="#050505" />
            <circle cx="50" cy="58" r="15" fill="#0a0a0a" />
            <ellipse cx="50" cy="34" rx="24" ry="6" fill="#000000" />
            <path d="M32 36 Q32 14 50 14 Q68 14 68 36 Q59 30 50 30 Q41 30 32 36 Z" fill="#000000" />
          </svg>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <Wordmark tone="light" size="sm" />
          </div>
        </div>

        {/* Contact card */}
        <div className="area-card flex h-20 items-center gap-3 rounded-2xl bg-white px-4 md:h-full">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
            <LogoMark className="h-5 w-5" color="#ffffff" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-black">Hriday</span>
            <span className="text-xs text-neutral-500">@hriday</span>
          </div>
        </div>
      </div>
    </section>
  );
}
