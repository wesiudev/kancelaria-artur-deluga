"use client";

import { useRef, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";

extend(geometry);

export default function ThreeGraces() {
  return (
    <Canvas
      style={{ background: "transparent" }}
      shadows="basic"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={["black", 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls />
    </Canvas>
  );
}

function Model(props) {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF("/graces-draco.glb");
  const prevRotation = useRef([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rotationY = -(event.clientX - window.innerWidth / 2) * 0.005;
      const positionZ =
        1 -
        Math.abs((event.clientX - window.innerWidth / 2) / window.innerWidth) *
          0.5;

      group.current.rotation.y = rotationY;
      group.current.position.z = positionZ;

      prevRotation.current = [
        group.current.rotation.x,
        group.current.rotation.y,
        group.current.rotation.z,
      ];
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.mouse.x * (Math.PI / 20), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.mouse.x) * 0.01],
      1,
      delta
    );

    // Interpolate between previous and current rotation for smoother rotation
    group.current.rotation.x =
      prevRotation.current[0] +
      (group.current.rotation.x - prevRotation.current[0]) * 0.1;
    group.current.rotation.y =
      prevRotation.current[1] +
      (group.current.rotation.y - prevRotation.current[1]) * 0.1;
    group.current.rotation.z =
      prevRotation.current[2] +
      (group.current.rotation.z - prevRotation.current[2]) * 0.1;
  });

  return (
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
        dispose={null}
      >
        <meshLambertMaterial color="white" />
      </mesh>

      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      />
    </group>
  );
}
