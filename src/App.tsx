import { Canvas } from '@react-three/fiber'
import { Camera } from './components/camera';
import { Globe } from './components/globe';
import './App.css'
import { Marker } from './components/markers';

const markers = [
  { label: "Paris", lat: 48.8575, lng: 2.3514 },
  { label: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { label: "Tokio", lat: 35.6895, lng: 139.6917 },
  { label: "New York", lat: 40.7128, lng: -74.0060 },
  { label: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { label: "Sydney", lat: -33.8688, lng: 151.2093 },
  { label: "Cape Town", lat: -33.9249, lng: 18.4241 },
];

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

        {markers.map((marker, index) => (
          <Marker key={index} lat={marker.lat} lng={marker.lng} />
        ))}
      </Canvas>
    </div>
  )
}

export default App
