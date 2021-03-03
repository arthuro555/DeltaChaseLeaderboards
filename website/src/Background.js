import Particles from "react-tsparticles";

export const Background = () => {
  return (
    <Particles
      id="tsparticles"
      style={{ zIndex: -1, position: "absolute", top: 0 }}
      options={{
        background: {
          color: {
            value: "#34a4f6",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#222222",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
