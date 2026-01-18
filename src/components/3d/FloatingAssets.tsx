import { Scene3D } from './Scene3D';
import { DinoModel } from './DinoModel';
import { BirdModel } from './BirdModel';
import { CloudsModel } from './CloudsModel';
import { CactusModel } from './CactusModel';

export function FloatingAssets() {
  return (
    <>
      {/* Dino - top right area */}
      <div className="floating-element top-[15%] right-[8%] w-48 h-48 animate-float">
        <Scene3D cameraPosition={[0, 1, 6]} floatIntensity={0.5}>
          <DinoModel position={[0, 0, 0]} scale={0.5} color="#1a1a1a" animate={false} />
        </Scene3D>
      </div>

      {/* Bird - left middle */}
      <div className="floating-element top-[40%] left-[5%] w-40 h-40 animate-float-slow">
        <Scene3D cameraPosition={[0, 0, 5]} floatIntensity={0.8}>
          <BirdModel position={[0, 0, 0]} scale={0.25} speed={0.3} color="#2a2a2a" />
        </Scene3D>
      </div>

      {/* Another Bird - right bottom */}
      <div className="floating-element bottom-[20%] right-[12%] w-32 h-32 animate-drift">
        <Scene3D cameraPosition={[0, 0, 5]} floatIntensity={0.6}>
          <BirdModel position={[0, 0, 0]} scale={0.2} speed={0.5} color="#3a3a3a" />
        </Scene3D>
      </div>

      {/* Clouds - top left */}
      <div className="floating-element top-[25%] left-[15%] w-56 h-40 animate-float-reverse">
        <Scene3D cameraPosition={[0, 0, 10]} floatIntensity={0.3}>
          <CloudsModel position={[0, 0, 0]} scale={0.003} speed={0.2} color="#666666" />
        </Scene3D>
      </div>

      {/* Cactus - bottom left */}
      <div className="floating-element bottom-[15%] left-[10%] w-36 h-48 animate-float">
        <Scene3D cameraPosition={[0, 1, 5]} floatIntensity={0.4}>
          <CactusModel position={[0, -0.5, 0]} scale={0.6} color="#1a1a1a" />
        </Scene3D>
      </div>

      {/* Small Dino - bottom center-right */}
      <div className="floating-element bottom-[35%] right-[25%] w-28 h-28 animate-float-slow opacity-[0.05]">
        <Scene3D cameraPosition={[0, 1, 8]} floatIntensity={0.7}>
          <DinoModel position={[0, 0, 0]} scale={0.3} color="#000000" animate={false} />
        </Scene3D>
      </div>
    </>
  );
}
