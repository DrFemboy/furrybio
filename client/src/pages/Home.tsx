import { MatrixRain } from "@/components/MatrixRain";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-2xl p-8">
          <h1 className="mb-8 text-center font-mono text-4xl font-bold text-primary animate-pulse">
            Follow the white rabbit...
          </h1>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
