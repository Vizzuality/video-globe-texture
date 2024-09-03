import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber"
import { useRef } from "react";

export const Camera = () => {
  const cameraControlsRef = useRef<CameraControls>(null!);

  useThree(({ controls }) => {
    if(controls) {
      cameraControlsRef.current.setPosition(0, 0, 4);
      cameraControlsRef.current.setTarget(0, 0, 0);
    }
  });

  // useFrame(() => {
  //   const y = Math.sin(performance.now() / 2000) * 0.5;

  //   // cameraControlsRef.current.setPosition(x, y, 4);
  //   cameraControlsRef.current.setTarget(0, y, 0);
  // });

  return (
    <CameraControls
      ref={cameraControlsRef}
      makeDefault
      dollySpeed={0}
      polarRotateSpeed={0}
    />
  )
}