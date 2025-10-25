import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [smallPos, setSmallPos] = useState({ x: 0, y: 0 });
  const [bigPos, setBigPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setSmallPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

 
    const follow = setInterval(() => {
      setBigPos((prev) => ({
        x: prev.x + (smallPos.x - prev.x)*0.8 , 
        y: prev.y + (smallPos.y - prev.y)*0.8,
      }));
    }, 10); 

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(follow);
    };
  }, [smallPos]);

  return (
    <>
      
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-400/20  mix-blend-difference pointer-events-none transition-transform duration-150 ease-out z-[9998]"
        style={{
          transform: `translate(${bigPos.x - 18}px, ${bigPos.y - 18}px)`,
        }}
      ></div>

      
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue-400 mix-blend-difference pointer-events-none transition-transform duration-75 ease-out z-[9999]"
        style={{
          transform: `translate(${smallPos.x - 8}px, ${smallPos.y - 8}px)`,
        }}
      ></div>
    </>
  );
}
