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
        camera={{ fov: 45 }}
      >
        <Camera />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />

        <mesh ref={sphereMeshRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
            <VideoMaterial url="10.mp4" />
          </Suspense>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
