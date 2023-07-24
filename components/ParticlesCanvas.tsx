'use client'
import {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {ParticleConfig} from "@/utils/particleConfig";
const ParticlesCanvas = () => {
  // @ts-ignore
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // @ts-ignore
      options={ParticleConfig}
    />
  );
};

export default ParticlesCanvas;
