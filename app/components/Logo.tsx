import Image from "next/image";

type Props = {
  /** Size in pixels for both width & height of the shield image */
  size?: number;
  /** Add tighter overlap between text and the shield point */
  tight?: boolean;
  /** Tailwind color class for the org name text */
  textColorClass?: string;
};

export default function Logo({
  size = 48, // default header size
  tight = true,
  textColorClass = "text-blue-900",
}: Props) {
  return (
    <div className="flex flex-col items-center leading-none select-none">
      <Image
        src="/logo.png"
        alt="Privacy Intelligence Academy logo"
        width={size}
        height={size}
        priority
        className="h-auto w-auto"
      />
      <span
        className={[
          tight ? "-mt-1" : "mt-0",
          "text-[10px] md:text-xs font-semibold tracking-tight",
          textColorClass,
        ].join(" ")}
      >
        Privacy Intelligence Academy
      </span>
    </div>
  );
}
