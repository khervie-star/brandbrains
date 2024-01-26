"use client";

import Image from "next/image";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import React from "react";
import { time } from "console";

export default function Home() {
  const [vantaEffect, setVantaEffect] = React.useState<any>(0);
  const vantaRef: any = React.useRef(null);

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
      if (vantaEffect) vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div ref={vantaRef} className="w-screen h-screen bg-white100">
        <div className="w-full flex justify-end">
          <h2 className="text-[200px] font-bold text-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Brand <br />
            Brains
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            temporibus hic nam a quasi numquam, vel dignissimos ad inventore
            consectetur quo ut eligendi sapiente tenetur culpa modi facere
            ducimus perferendis.
          </p>
        </div>
      </div>
    </main>
  );
}
