"use client";

import Image from "next/image";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import React from "react";
import { time } from "console";

export default function Home() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          xOffset: -0.25,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div ref={vantaRef} className="w-screen h-screen bg-white100">
        <p style={{ color: "#fff", paddingTop: "20px" }}></p>
      </div>
      <div className="h-screen w-screen bg-green-600"></div>
    </main>
  );
}
