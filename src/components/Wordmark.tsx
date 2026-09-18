import LogoMark from "./LogoMark";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "lg";
};

export default function Wordmark({ tone = "dark", size = "lg" }: WordmarkProps) {
  const textColor = tone === "dark" ? "text-black" : "text-white";
  const iconColor = tone === "dark" ? "#000000" : "#ffffff";
  const iconBox = size === "lg" ? "h-9 w-9" : "h-6 w-6";
  const iconPad = size === "lg" ? "p-1.5" : "p-1";
  const textSize = size === "lg" ? "text-4xl" : "text-lg";
  const border = tone === "dark" ? "border-black" : "border-white";

  return (
    <div className={`flex items-center gap-2 ${textColor}`}>
      <span className={`flex items-center justify-center rounded-md border-2 ${border} ${iconBox} ${iconPad}`}>
        <LogoMark className="h-full w-full" color={iconColor} />
      </span>
      <span className={`font-bold tracking-tight ${textSize}`}>suifan</span>
    </div>
  );
}
