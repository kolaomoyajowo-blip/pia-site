"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Pixel size for the square logo image */
  size?: number;
  /** Use a slightly tighter gap between the icon and the text */
  tight?: boolean;
  /** Tailwind class(es) to color the text label */
  textColorClass?: string;
  /** Optional: add extra classes to the wrapper */
  className?: string;
};

export default function Logo({
  size = 40,
  tight = false,
  textColorClass = "text-slate-900",
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center ${tight ? "gap-2" : "gap-3"} ${className}`}>
      <Image
        src="/logo.png"
        alt="Privacy Intelligence Academy logo"
        width={size}
        height={size}
        priority
      />
      <Link
        href="/"
        aria-label="Go to homepage"
        className={`font-semibold ${textColorClass}`}
      >
        Privacy Intelligence Academy
      </Link>
    </div>
  );
}
