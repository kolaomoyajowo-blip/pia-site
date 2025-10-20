"use client";

import Image from "next/image";

type Props = {
  /** Pixel width/height of the square logo */
  size?: number;
  /** Extra Tailwind classes if you want */
  className?: string;
};

export default function Logo({ size = 56, className = "" }: Props) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`} aria-label="Privacy Intelligence Academy">
      {/* Shield logo */}
      <Image
        src="/logo.png"
        alt="Privacy Intelligence Academy shield logo"
        width={size}
        height={size}
        priority
      />
      {/* Name touching the bottom tip of the shield */}
      <span
        className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wide"
        style={{ marginTop: "-2px" }}  // visually nudges text toward the shield tip
      >
        Privacy Intelligence Academy
      </span>
    </div>
  );
}
