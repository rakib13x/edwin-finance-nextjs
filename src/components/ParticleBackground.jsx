
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
  () => ({
    background: {
      color: {
        value: "#000", // Keep background black
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Only White Stars
      },
      links: {
        enable: false, // Disable links for standalone stars
      },
      move: {
        enable: true,
        speed: 1, // Slow movement for a twinkling effect
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 120, // Increase star count for a denser sky
        density: {
          enable: true,
          area: 900, // Spread out stars more
        },
      },
      opacity: {
        value: { min: 0.4, max: 1 }, // Flickering effect
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.4,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 }, // Slightly larger particles for some brightness variation
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      shadow: {
        enable: true,
        color: "#ffffff",
        blur: 10, // Stronger glow effect
      },
    },
    detectRetina: true,
  }),
  []
);

  if (init) {
    return (
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -10, // Set this value lower than any of your sections
          }}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;
