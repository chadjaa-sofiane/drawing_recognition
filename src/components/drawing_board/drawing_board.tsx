import { useEffect, useRef } from "react";

const DrawingBoard = () => {
  const drawingBoardRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = drawingBoardRef.current;
    if (canvas) {
      canvas.width = canvas?.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      ctx.strokeStyle = "yellow";
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();
    }
  }, []);
  return (
    <canvas
      ref={drawingBoardRef}
      className="w-[600px] h-[600px] border border-yellow-400 mt-8"
    />
  );
};

export default DrawingBoard;
