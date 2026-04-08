import { useRef } from "react";

function ParallaxCard({ children, img }) {
  const ref = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    ref.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-300 ease-out rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img src={img} alt="" className="w-full h-80 object-cover" />
      {children}
    </div>
  );
}

export default ParallaxCard;