import { CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react";

export const Camera = () => {
  const cameraControlsRef = useRef<CameraControls>(null!);

  useThree(({ controls }) => {
    // camera.position.set(0, 0, 5);
    if(controls) {
      cameraControlsRef.current.setPosition(0, 1, 2);
      cameraControlsRef.current.setTarget(0, 1, 0);
    }
  });

  useFrame(() => {
    const y = Math.sin(performance.now() / 2000) * 0.5 + 0.5;
    console.log(y);
    // cameraControlsRef.current.setTarget(0, y, 0);
  });

  return (
    <CameraControls
      ref={cameraControlsRef}
      makeDefault
      dollySpeed={0}
      polarRotateSpeed={0}
    />
  )
}