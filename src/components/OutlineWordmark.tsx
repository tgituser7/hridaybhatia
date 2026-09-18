import LogoMark from "./LogoMark";

export default function OutlineWordmark() {
  return (
    <div className="relative flex items-center gap-3 text-white">
      <span className="flex h-16 w-16 items-center justify-center rounded-lg border-[3px] border-white p-3">
        <LogoMark className="h-full w-full" color="#ffffff" animated />
      </span>
      <span className="outline-fill text-4xl font-bold tracking-tight">hriday</span>
    </div>
  );
}
