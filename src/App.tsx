import { Suspense, useRef } from 'react'
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber'
import { useTexture, useVideoTexture } from '@react-three/drei'
import './App.css'
import { Camera } from './components/camera';

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url)
  return <meshStandardMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url)
  return <meshStandardMaterial map={texture} toneMapped={false} />
}


function App() {
  const sphereMeshRef = useRef<Mesh>(null!);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Canvas
        camera={{ fov: 35 }}
      >
        <Camera />

        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        <mesh ref={sphereMeshRef} position={[0, 0, 0]} rotation={[0,0,-12.5 * (Math.PI/180), 'YXZ']}>
          <sphereGeometry args={[1, 64, 64]} />
          {/* <FallbackMaterial url="world.jpg" /> */}
          <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
            <VideoMaterial url="wind_speed_global_10km.mp4" />
          </Suspense>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
