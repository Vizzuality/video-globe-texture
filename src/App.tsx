import { Canvas } from '@react-three/fiber'
import { Camera } from './components/camera';
import { Globe } from './components/globe';
import './App.css'



function App() {
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

        <Globe />
      </Canvas>
    </div>
  )
}

export default App
