import clsx from "clsx";
import Link from "next/link";
import Image from "next/image"; 
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" title="Home" className={clsx("inline-block", className)}>
      <Image
        src="/logo.jpg"
        alt="TecWave Logo"
        width={125}
        height={1} 
        style={{marginTop: -50, marginBottom: -60}}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
