import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center leading-none select-none">
      {/* Logo image */}
      <Image
        src="/logo.png"
        alt="Privacy Intelligence Academy logo"
        width={44}
        height={44}
        priority
        className="h-10 w-10 md:h-12 md:w-12"
      />
      {/* Org name — pulled up slightly so it touches the shield tip */}
      <span className="-mt-1 text-[10px] md:text-xs font-semibold tracking-tight">
        Privacy Intelligence Academy
      </span>
    </div>
  );
}
