"use client";

import Image from "next/image";

type Props = {
  /** Size of the square logo in pixels */
  size?: number;
  /** Show org name under the shield (for areas like navbar we usually hide) */
  showName?: boolean;
};

export default function Logo({ size = 56, showName = false }: Props) {
  return (
    <div className="flex flex-col items-center leading-none">
      <Image
        src="/logo.png"
        alt="Privacy Intelligence Academy logo"
        width={size}
        height={size}
        priority
      />
      {showName && (
        <span className="mt-1 text-xs font-semibold tracking-wide text-[#0b3b69]">
          Privacy Intelligence Academy
        </span>
      )}
    </div>
  );
}
