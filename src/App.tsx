import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture, useVideoTexture } from '@react-three/drei'
import './App.css'
import { Suspense } from 'react'

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url)
  return <meshStandardMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url)
  return <meshStandardMaterial map={texture} toneMapped={false} />
}


function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />

      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <Suspense fallback={<FallbackMaterial url="10.jpg" />}>
          <VideoMaterial url="10.mp4" />
        </Suspense>
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}

export default App
