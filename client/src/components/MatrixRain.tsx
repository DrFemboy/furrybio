import { useMatrixRain } from "@/hooks/useMatrixRain";

export function MatrixRain() {
  const canvasRef = useMatrixRain();

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.15 }}
    />
  );
}
